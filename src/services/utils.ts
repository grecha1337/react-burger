export function setCookie(
  name: string,
  value: string,
  props: { [key: string]: any } & { expires?: number | Date | string } = {}
) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && (exp as Date).toUTCString) {
    props.expires = (exp as Date).toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
  setCookie(name, "", { expires: -1 });
}

export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([$?*|{}\]\\^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function timeSince(date: Date): string {
  const currentDat = new Date();
  const bufferDate = new Date(date.getTime());
  currentDat.setHours(0);
  currentDat.setMinutes(0);
  currentDat.setSeconds(0);
  currentDat.setMilliseconds(0);

  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  let seconds = Math.floor((currentDat.getTime() - date.getTime()) / 1000);
  console.log(new Date().toUTCString());

  let intervalYear = seconds / 31536000;
  let intervalMonth = seconds / 2592000;
  let intervalDay = seconds / 86400;

  let timAgo = "Сегодня";
  if (intervalDay === 1) {
    timAgo = "Вчера";
  }

  if (intervalDay > 1) {
    timAgo = `${Math.floor(intervalDay)} ${declOfNum(Math.floor(intervalDay), [
      "день",
      "дня",
      "дней",
    ])} назад`;
  }

  if (intervalMonth > 1) {
    timAgo = `${Math.floor(intervalMonth)}  ${declOfNum(
      Math.floor(intervalMonth),
      ["месяц", "месяца", "месяцев"]
    )} назад`;
  }

  if (intervalYear > 1) {
    timAgo = `${Math.floor(intervalMonth)} год`;
  }

  return `${timAgo}, ${getHoursAndMins(bufferDate)} i-GMT${getTimeZone()}`;
}

export function getHoursAndMins(date: Date) {
  const mins = ("0" + date.getMinutes()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  return hours + ":" + mins;
}

function declOfNum(n: number, words: ReadonlyArray<string>) {
  return words[
    n % 10 === 1 && n % 100 !== 11
      ? 0
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
      ? 1
      : 2
  ];
}

function getTimeZone(): string {
  const currentTimeZoneOffsetInHours = new Date().getTimezoneOffset() / 60;
  if (currentTimeZoneOffsetInHours > 0) {
    return `-${Math.abs(currentTimeZoneOffsetInHours)}`;
  } else if (currentTimeZoneOffsetInHours < 0) {
    return `+${Math.abs(currentTimeZoneOffsetInHours)}`;
  }
  return currentTimeZoneOffsetInHours.toString();
}

export const FEED_CONNECTION_INIT: "FEED_CONNECTION_INIT" =
  "FEED_CONNECTION_INIT";
export const FEED_CONNECTION_CLOSE: "FEED_CONNECTION_CLOSE" =
  "FEED_CONNECTION_CLOSE";
export const FEED_CONNECTION_SUCCESS: "FEED_CONNECTION_SUCCESS" =
  "FEED_CONNECTION_SUCCESS";
export const FEED_CONNECTION_ERROR: "FEED_CONNECTION_ERROR" =
  "FEED_CONNECTION_ERROR";
export const FEED_CONNECTION_CLOSED: "FEED_CONNECTION_CLOSED" =
  "FEED_CONNECTION_CLOSED";
export const FEED_GET_MESSAGE: "FEED_GET_MESSAGE" = "FEED_GET_MESSAGE";

export interface IFeedWsInit {
  readonly type: typeof FEED_CONNECTION_INIT;
  readonly payload: string;
}

export interface IFeedWsClose {
  readonly type: typeof FEED_CONNECTION_CLOSE;
}

export interface IFeedWsConnectionSuccess {
  readonly type: typeof FEED_CONNECTION_SUCCESS;
}

export interface IFeedWsConnectionError {
  readonly type: typeof FEED_CONNECTION_ERROR;
}

export interface IFeedWsConnectionClosed {
  readonly type: typeof FEED_CONNECTION_CLOSED;
}

export interface IFeedWsGetMessage {
  readonly type: typeof FEED_GET_MESSAGE;
  readonly payload: Event;
}

export const FeedWsInit = (payload: string): IFeedWsInit => {
  return {
    type: FEED_CONNECTION_INIT,
    payload,
  };
};

export const FeedWsClose = (): IFeedWsClose => {
  return {
    type: FEED_CONNECTION_CLOSE,
  };
};

export const FeedConnectionSuccess = (): IFeedWsConnectionSuccess => {
  return {
    type: FEED_CONNECTION_SUCCESS,
  };
};

export const FeedConnectionError = (): IFeedWsConnectionError => {
  return {
    type: FEED_CONNECTION_ERROR,
  };
};

export const FeedConnectionClosed = (): IFeedWsConnectionClosed => {
  return {
    type: FEED_CONNECTION_CLOSED,
  };
};

export const FeedGetMessage = (message: Event): IFeedWsGetMessage => {
  return {
    type: FEED_GET_MESSAGE,
    payload: message,
  };
};

export type TWsActions =
  | IFeedWsInit
  | IFeedWsConnectionSuccess
  | IFeedWsConnectionError
  | IFeedWsConnectionClosed
  | IFeedWsGetMessage;

import { ReactNode } from "react-dom/node_modules/@types/react";

export type TErrorText = {
  readonly text: string;
};

export type TModalOverlay = {
  children: ReactNode;
  onClose: () => void;
};

export type TModal = {
  title?: string;
} & TModalOverlay;

export type TOrderDetails = {
  readonly order: number;
};

export type TIngredient = {
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly proteins: number;
  readonly type: TIngredientType;
  readonly __v: number;
  readonly _id: string;
  readonly qty?: number | undefined | null;
  index?: number;
};

export type TIngredientWithUniqKey = TIngredient & {
  readonly uuid: string;
};

export type TIngredientList = {
  readonly list: ReadonlyArray<TIngredient>;
  readonly typeCard: TIngredientType;
  readonly title: string;
  readonly handleModal: (param: TIngredient) => void;
};

export type TOrderSuccess = {
  name: string;
  order: { number: number };
  success: boolean;
};

export type TIngredientType = "main" | "sauce" | "bun";

export type TConstructorItem = {
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  index: number;
  id: string;
};

export type TRegisterRequest = {
  email: string;
  password: string;
  name: string;
};

export type TGetCodeForResetPassRQ = {
  email: string;
};

export type TGetCodeForResetPassSuccess = {
  success: boolean;
  message: string;
};

export type TRegisterSuccess = {
  success: boolean;
  user: {
    email: string;
    name: string;
  } | null;
  accessToken: string;
  refreshToken: string;
};

export type TUser = TRegisterSuccess & {
  sendRequest: boolean;
  sendRequestFailed: boolean;
  resetPasswordInfo :  TGetCodeForResetPassSuccess & {
    request : boolean,
    failedRequest: boolean;
  }
};

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
};

export type TIngredientList = {
  readonly list: ReadonlyArray<TIngredient>;
  readonly typeCard: TIngredientType;
  readonly title: string;
  readonly handleModal: (param: TIngredient) => void;
};

type TIngredientType = "main" | "sauce" | "bun";

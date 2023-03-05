import { TEXT_COLOR_ENUM } from "../../theme/color";

export enum BUTTON_FILL_ENUM {
  CLEAR = "clear",
  OUTLINE = "outline",
  SOLID = "solid",
  DEFAULT = "default",
}

export enum BUTTON_FUNCTION_ENUM {
  SUBMIT = "submit",
  BUTTON = "button",
}

export type BUTTON_FILL_TYPE = `${BUTTON_FILL_ENUM}`;
export type BUTTON_FUNCTION_TYPE = `${BUTTON_FUNCTION_ENUM}`;

export const BUTTON_TEXT_COLOR = {
  [BUTTON_FILL_ENUM.OUTLINE]: TEXT_COLOR_ENUM.BUTTON_OUTLINE,
  [BUTTON_FILL_ENUM.DEFAULT]: TEXT_COLOR_ENUM.BUTTON_SOLID,
  [BUTTON_FILL_ENUM.CLEAR]: TEXT_COLOR_ENUM.BUTTON_SOLID,
  [BUTTON_FILL_ENUM.SOLID]: TEXT_COLOR_ENUM.BUTTON_SOLID,
};


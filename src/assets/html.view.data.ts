import type CssFile from "./css.file";
import type JsFile from "./js.file";

export default interface HTMLViewData {
  title: string;
  description: string;
  additionalCssFiles?: CssFile[];
  additionalScripts?: JsFile[];
}

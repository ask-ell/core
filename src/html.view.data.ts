import type CssFile from './assets/css.file'
import type JsFile from './assets/js.file'

export interface HTMLViewData {
  title: string
  description: string
  additionalCssFiles?: CssFile[]
  additionalScripts?: JsFile[]
}

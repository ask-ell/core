import { Injectable } from './di'

@Injectable()
export default class Logger {
  info(...data: any[]): void {
    console.info('[INFO]', ...data)
  }

  warn(...data: any[]): void {
    console.warn('[WARNING]', ...data)
  }
}

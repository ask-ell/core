import { Injectable } from './di'

@Injectable()
export default class Logger {
  info(...data: any[]): void {
    console.info(this.generateTimestamp(), '[INFO]', ...data)
  }

  warn(...data: any[]): void {
    console.warn(this.generateTimestamp(), '[WARNING]', ...data)
  }

  error(...data: any[]): void {
    console.error(this.generateTimestamp(), '[ERROR]', ...data)
  }

  private generateTimestamp(): number {
    return new Date().getTime()
  }
}

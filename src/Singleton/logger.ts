export class Logger {
  private static instance: Logger
  private constructor(){}

  static getInstance(): Logger {
    if(!this.instance){
      return this.instance = new Logger()
    }
    return this.instance
  }
}
export class Logger2 {
  private static instance: Logger2
  private count: number = 0
  private constructor(){}

  static getInstance(): Logger2 {
    if(!this.instance){
      return this.instance = new Logger2()
    }
    return this.instance
  }

  getCount(){
    return this.count ++
  }
}
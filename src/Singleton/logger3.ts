class Logger3 {
  private instance: Logger3 | undefined
  private count: number = 0
  constructor(){}

  getCount(){
    return this.count ++
  }
}
const logger = new Logger3()
export {
  logger
}


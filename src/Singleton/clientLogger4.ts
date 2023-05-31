import { logger } from './logger4'

const a = logger.count = 20
console.log(a)

const b = logger
console.log( b.count)

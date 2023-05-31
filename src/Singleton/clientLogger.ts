import { Logger } from './logger'

const a = Logger.getInstance()
const b = Logger.getInstance()

console.log(a === b)
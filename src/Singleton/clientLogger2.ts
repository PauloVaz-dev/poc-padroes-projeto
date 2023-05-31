import { Logger2 } from './logger2'

const a = Logger2.getInstance()
const b = Logger2.getInstance()

console.log(a.getCount(), b.getCount())
import { cpus } from 'os'

import { Config } from './types'

const numCPUs = cpus().length
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 5000
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017'

const config: Config = {
  isDev,
  mongoURI,
  numCPUs,
  port,
}

export default config

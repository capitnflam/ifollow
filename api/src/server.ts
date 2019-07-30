import { json as bodyParserJson } from 'body-parser'
import express, { Request, Response } from 'express'
import * as path from 'path'

import Db from './db'
import { Config } from './types'

const serve = async (config: Config) => {
  const db = new Db(config.mongoURI)

  await db.connect()

  const app = express()

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')))

  app.use(bodyParserJson())

  // Answer API requests.
  app.get('/api', (req: Request, res: Response) => {
    res.set('Content-Type', 'application/json')
    res.send('{"message":"Hello from the custom server!"}')
  })

  app.get('/googlef55e3a2a29939a68.html', (req: Request, res: Response) => {
    res.sendFile(
      path.resolve(__dirname, '../static', 'googlef55e3a2a29939a68.html'),
    )
  })

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../../react-ui/build', 'index.html'))
  })

  app.listen(config.port, () => {
    console.error(
      `Node ${
        config.isDev ? 'dev server' : 'cluster worker ' + process.pid
      }: listening on port ${config.port}`,
    )
  })
}

export default serve

import cluster from 'cluster'

import config from './config'
import serve from './server'

// Multi-process to utilize all CPU cores.
if (!config.isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`)

  // Fork workers.
  for (let i = 0; i < config.numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`,
    )
  })
} else {
  serve(config)
}

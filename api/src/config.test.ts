import config from './config'

describe('config', () => {
  it('contains necessary parameters', () => {
    expect(config).toHaveProperty('isDev')
    expect(config).toHaveProperty('mongoURI')
    expect(config).toHaveProperty('numCPUs')
    expect(config).toHaveProperty('port')
  })
})

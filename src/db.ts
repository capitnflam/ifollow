import { MongoClient } from 'mongodb'

export default class Db {
  private db?: MongoClient
  private uri: string

  constructor(uri: string) {
    this.uri = uri
  }

  public async connect() {
    this.db = await MongoClient.connect(this.uri)
  }
}

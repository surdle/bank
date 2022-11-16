class Client {
  name: string
  id: string
  age: number
  balance: number
  pin: number
  creationDate: Date
  constructor (name: string, id: string, age: number) {
    this.name = name
    this.id = id
    this.age = age
    this.balance = 0
    this.pin = Math.floor(Math.random() * 10_000)
    this.creationDate = new Date()
  }
}

export default Client

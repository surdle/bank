class Transaction {
  origin: string
  value: number
  date: string
  description: string
  receiver: string
  isTransaction: boolean

  constructor (
    origin: string,
    value: number,
    description: string,
    receiver: string,
    isTransaction: boolean = true
  ) {
    this.origin = origin
    this.value = value
    this.date = new Date().toUTCString()
    this.description = description
    this.receiver = receiver
    this.isTransaction = isTransaction
  }
}

export default Transaction

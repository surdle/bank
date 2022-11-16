import Client from './client'
import Transaction from './transaction'
import Validation from './validation'


class Bank {
  clients: Client[] = []
  transactions: Transaction[] = []

  createAccount (name: string, id: string, age: number): number {
    console.log('Creating account...' + name)
    const validation = new Validation()
    validation.validateNewClient(name, id, age)
    const newClient = new Client(name, id, age)
    this.clients.push(newClient)
    console.log(`Account created! with pin ${newClient.pin}!`)
    return newClient.pin
  }

  findClient (id: string): Client | undefined {
    return this.clients.find(client => client.id === id)
  }

  getBalance (id: string): number | undefined {
    const client = this.findClient(id) // return undefined or client
    if (client !== undefined) {
      return client.balance
    }
    console.log('Client not found!')
    return undefined
  }

  addBalance (id: string, value: number, isTransaction: boolean): void {
    const client = this.findClient(id)
    if (client !== undefined) {
      client.balance = client.balance + value
      const newTransaction = new Transaction(
        id,
        value,
        'Depósito',
        'Banco',
        isTransaction
      )
      this.transactions.push(newTransaction)
      console.log('Balance added!')
    }
  }

  removeBalance (id: string, value: number, isTransaction: boolean): void {
    const client = this.findClient(id)
    if (client !== undefined) {
      client.balance -= value
      const newTransaction = new Transaction(
        id,
        value,
        'Retirada',
        'Banco',
        isTransaction
      )
      this.transactions.push(newTransaction)
      console.log('Balance removed!')
    }
  }

  getAllClients (): Client[] {
    return this.clients
  }

  checkIfPinAndIdMatch (id: string, pin: number): boolean {
    console.log('Checking if pin and ID match...')

    const client = this.findClient(id)
    console.log(client)
    if (client !== undefined) {
      return client.pin === pin
    }
    console.log('Pin and ID do not match!')
    return false
  }

  newTransaction (
    origin: string,
    value: number,
    description: string,
    receiver: string
  ): void {
    const validation = new Validation()
    validation.validateNewTransaction(origin, value, description, receiver)

    const originCheck = this.findClient(origin)
    const receiverCheck = this.findClient(receiver)
    if (originCheck !== undefined && receiverCheck !== undefined) {
      const newTransaction = new Transaction(
        origin,
        value,
        description,
        receiver,
        false
      )
      this.transactions.push(newTransaction)
      console.log('Transaction created!')
    }
  }

  getTransactionsById (id: string): Transaction[] {
    return this.transactions.filter(transaction => transaction.origin === id)
  }

  getAllTransactions (): Transaction[] {
    return this.transactions
  }
}

// console.log('Starting...')
// const bank = new Bank()

// console.log(bank.createAccount('joao', '123', 18))
// console.log(bank.createAccount('maria', '456', 18))
// console.log(bank.createAccount('pedro', '789', 18))
// console.log(bank.getBalance('123'))
// console.log(bank.addBalance('123', 100))

// bank.newTransaction('123', 100, new Date(), 'compra', '456')
// bank.newTransaction('123', 100, new Date(), 'compra', '789')
// bank.newTransaction('456', 100, new Date(), 'compra', '123')
// bank.newTransaction('456', 100, new Date(), 'compra', '789')

// console.log(bank.getTransactionsById('123'))
// console.log(bank.getAllTransactions())
// console.log(bank.findClient('123'))
// console.log(bank.checkIfPinAndIdMatch('123', 123))


export default function Main (): any {
  console.log('Starting...')
  return Bank
}

class Client {
  name: string
  cpf: string
  age: number
  balance: number
  transactions: Transaction[] = []
  pin: number
  creationDate: Date
  constructor (name: string, cpf: string, age: number, balance: number) {
    this.name = name
    this.cpf = cpf
    this.age = age
    this.balance = balance
    this.pin = Math.floor(Math.random() * 10_000)
    this.creationDate = new Date()
  }
}

class Transaction {
  origin: string
  value: number
  date: string
  description: string
  receiver: string

  constructor (
    origin: string,
    value: number,
    date: Date,
    description: string,
    receiver: string
  ) {
    this.origin = origin
    this.value = value
    this.date = new Date(date).toUTCString()
    this.description = description
    this.receiver = receiver
  }
}

class Validation {
  validateNewClient (
    name: string,
    cpf: string,
    age: number,
    balance: number
  ): void {
    if (name === '' || cpf === '' || age === 0 || balance !== 0) {
      throw new Error(
        `Invalid client. Name: ${name}, CPF: ${cpf}, Age: ${age}, Balance: ${balance}`
      )
    }
  }

  validateNewTransaction (
    origin: string,
    value: number,
    description: string,
    receiver: string
  ): void {
    if (origin === '' || value === 0 || description === '' || receiver === '') {
      throw new Error(
        `Invalid transaction. Origin: ${origin}, Value: ${value}, Description: ${description}, Receiver: ${receiver}`
      )
    }
  }
}

class Bank {
  clients: Client[] = []
  transactions: Transaction[] = []

  createAccount (
    name: string,
    cpf: string,
    age: number,
    balance: number
  ): number {
    console.log('Creating account...' + name)
    const validation = new Validation()
    validation.validateNewClient(name, cpf, age, balance)
    const newClient = new Client(name, cpf, age, balance)
    this.clients.push(newClient)
    console.log(`Account created! with pin ${newClient.pin}!`)
    return newClient.pin
  }

  getBalance (cpf: string): number {
    const client = this.clients.find(client => client.cpf === cpf)
    if (client !== undefined) {
      return client.balance
    }

    return 0
  }

  addBalance (cpf: string, value: number): void {
    const client = this.clients.find(client => client.cpf === cpf)
    if (client !== undefined) {
      client.balance += value
    }
  }

  removeBalance (cpf: string, value: number): void {
    const client = this.clients.find(client => client.cpf === cpf)
    if (client !== undefined) {
      client.balance -= value
    }
  }

  newTransaction (
    origin: string,
    value: number,
    date: Date,
    description: string,
    receiver: string
  ): void {
    const validation = new Validation()
    validation.validateNewTransaction(origin, value, description, receiver)

    const newTransaction = new Transaction(
      origin,
      value,
      date,
      description,
      receiver
    )
    this.transactions.push(newTransaction)
    const client = this.clients.find(client => client.cpf === origin)
    if (client !== undefined) {
      client.transactions.push(newTransaction)
      console.log('Transaction created!', client.transactions)
    } else {
      console.log('Transaction not created!')
    }
    
  }

  getTransactionsByCpf (cpf: string): Transaction[] {
    const client = this.clients.find(client => client.cpf === cpf)
    if (client !== undefined) {
      return client.transactions
    }
    return []
  }

  getAllTransactions (): Transaction[] {
    return this.transactions
  }

  checkIfClientExists (cpf: string): boolean {
    const client = this.clients.find(client => client.cpf === cpf)
    if (client !== undefined) {
      return true
    }
    return false
  }

  checkIfPinAndCpfMatch (cpf: string, pin: number): boolean {
    console.log('Checking if pin and cpf match...')
    console.log(`CPF: ${cpf}, PIN: ${pin}`)
    console.log(this.clients)

    const client = this.clients.find(client => client.cpf === cpf)
    if (client !== undefined) {
      return client.pin === pin
    }
    console.log('Pin and cpf do not match!')
    return false
  }

  getAllClients (): Client[] {
    return this.clients
  }

  getClientByCpf (cpf: string): Client | undefined {
    return this.clients.find(client => client.cpf === cpf)
  }
}

export default function Main (): any {
  console.log('Starting...')
  return Bank
}

// console.log(bank.createAccount('joao¡', '123', 18, 100))
// console.log(bank.createAccount('maria', '456', 18, 100))
// console.log(bank.createAccount('pedro', '789', 18, 100))
// console.log(bank.getBalance('123'))
// console.log(bank.addBalance('123', 100))

// bank.newTransaction('123', 100, new Date(), 'compra', '456')
// bank.newTransaction('123', 100, new Date(), 'compra', '789')
// bank.newTransaction('456', 100, new Date(), 'compra', '123')
// bank.newTransaction('456', 100, new Date(), 'compra', '789')

// console.log(bank.getTransactionsByCpf('123'))
// console.log(bank.getAllTransactions())
// console.log(bank.checkIfClientExists('123'))
// console.log(bank.checkIfPinAndCpfMatch('123', 123))
// }

// export default Main

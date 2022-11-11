import { signal } from '@preact/signals'
import Bank from '../store/banco'

const database = signal(new (Bank())())
export const currentPage = signal('login')
export const currentUser = signal({
  name: '',
  cpf: '',
  age: '',
  balance: 0,
  pin: '',
  creationDate: ''
})

// Borrar redundante
export const transactions = signal([])

export const changePage = (page = 'login') => {
  console.log(page)
  currentPage.value = page
}

export const changeUser = (user = {}) => {
  user = database.value.getClientByCpf(user)
  console.log(user)
  const { name, cpf, age, balance, pin, creationDate, transactions } = user
  currentUser.value = { name, cpf, age, balance, pin, creationDate, transactions }
}

export const newAccount = (accountName, accountId, age, balance) => {
  return database.value.createAccount(accountName, accountId, age, balance)
}

export const loginAccount = (accountID, accountPIN) => {
  console.log(typeof accountID, typeof accountPIN)
  console.log(database.value.getAllClients())
  return database.value.checkIfPinAndCpfMatch(accountID, accountPIN)
}

export const depositMoney = (amount) => {
  amount = +amount
  amount = currentUser.value.balance + amount
  currentUser.value = { ...currentUser.value, balance: amount }
  console.log('depositMoney', amount, currentUser.value.balance)
  return database.value.addBalance(currentUser.value.cpf, +amount)
}

export const withdrawMoney = (amount) => {
  amount = +amount
  amount = currentUser.value.balance - amount
  currentUser.value = { ...currentUser.value, balance: amount }
  console.log('withdrawMoney', amount, currentUser.value.balance)
  return database.value.removeBalance(currentUser.value.cpf, +amount)
}

export const newTransaction = (origin, value, description, receiver) => {
  // origin: string,
  // value: number,
  // date: Date,
  // description: string,
  // receiver: string
  value = +value
  const dateString = new Date().toUTCString()
  transactions.value = [...transactions.value, { origin, value, dateString, description, receiver }]
  return database.value.newTransaction(origin, +value, new Date(), description, receiver)
}

export const getAllClients = () => {
  return database.value.getAllClients()
}

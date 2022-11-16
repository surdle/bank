import { signal } from '@preact/signals'
import Bank from '../store/bank'

const database = signal(new (Bank())())
export const currentPage = signal('login')

export const currentID = signal('')
export const setID = (id) => {
  currentID.value = id
}

export const currentBalance = signal(0)
export const currentTransactions = signal([])

export const getID = () => {
  return currentID.value
}

export const getData = () => {
  return database.value.findClient(getID())
}

export const getClientTransactions = () => {
  currentTransactions.value = getAllTransactions().filter(transaction => (
    (transaction.origin === getID() || transaction.receiver === getID()) && transaction.isTransaction === false
  ))
}

export const getCurrentBalance = () => {
  currentBalance.value = getData().balance
  return getClient(getID()).balance
}

export const getClient = (id) => {
  return database.value.clients.find((client) => client.id === id)
}

export const changePage = (page = 'login') => {
  currentPage.value = page
}

export const newAccount = (accountName, accountId, age) => {
  return database.value.createAccount(accountName, accountId, age)
}

export const registerAccount = (accountName, accountId, age, pin) => {
  const client = database.value.findClient(accountId)
  if (client === undefined) {
    return database.value.createAccount(accountName, accountId, age, pin)
  }
  console.log('account already exists')
  return 0
}

export const loginAccount = (accountID, accountPIN) => {
  return database.value.checkIfPinAndIdMatch(accountID, +accountPIN)
}

export const depositMoney = (id, amount, isTransaction = false) => {
  database.value.addBalance(id, +amount, isTransaction)
}

export const withdrawMoney = (id, amount, isTransaction = false) => {
  database.value.removeBalance(id, +amount, isTransaction)
}

export const newTransaction = (origin, value, description, receiver) => {
  database.value.newTransaction(origin, value, description, receiver)
}

export const getAllClients = () => {
  return database.value.getAllClients()
}

export const getAllTransactions = () => {
  return database.value.getAllTransactions()
}

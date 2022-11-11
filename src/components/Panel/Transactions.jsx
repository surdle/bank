import { transactions, currentUser } from '../../signals/signal'
import Transaction from './Transaction'

import { Signal } from '@preact/signals'

const userTransactions = new Signal([])

export default function Transactions () {
  userTransactions.value = transactions.value.filter(transaction => (
    transaction.origin === currentUser.value.cpf || transaction.receiver === currentUser.value.cpf
  ))
  return (
    <div class='p-4 w-full bg-white rounded-xl border border-black shadow-md sm:p-6 md:p-8 col-span-3 fdd'>
      <span class='font-bold text-xl mb-4 block'>Movimientos</span>
      {userTransactions.value.map((transaction, index) => (
        <Transaction transaction={transaction} key={index} />
      ))}
    </div>
  )
}

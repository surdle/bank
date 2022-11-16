import { currentTransactions } from '../../signals/signal'
import Transaction from './Transaction'

export default function Transactions () {
  return (
    <div class='p-4 w-full bg-white rounded-xl border border-black shadow-md sm:p-6 md:p-8 col-span-3 fdd'>
      <span class='font-bold text-xl mb-4 block'>Movimientos</span>
      {currentTransactions.value.map((transaction, index) => (
        <Transaction transaction={transaction} key={index} />
      ))}
    </div>
  )
}

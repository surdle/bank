import PersonalData from './Data'
import Balance from './Balance'
import AWmoney from './AWmoney'
import MoneyTransfer from './MoneyTransfer'
import Transactions from './Transactions'
import LogOut from '../LogOut'

export default function Panel () {
  return (
    <div class='m-14 mx-[55px] xl:mx-[350px]'>
      <LogOut />
      <div class='grid place-content-center grid-cols-1 xl:grid-cols-3 gap-10 mb-8'>
        <PersonalData />
        <div class='flex flex-col justify-center content-center space-y-6'>
          <Balance />
          <AWmoney />
        </div>
        <MoneyTransfer />
      </div>
      <Transactions />
    </div>
  )
}

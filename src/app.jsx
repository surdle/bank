import './app.css'

import usePage from './hooks/usePage'
import {
  currentPage,
  getAllTransactions,
  getAllClients,
  getID
} from './signals/signal'

import Login from './components/Login'
import SignUp from './components/SingUp'
import Panel from './components/Panel'
import ErrorToast from './components/ErrorToast'

export function App () {
  const page = usePage({
    currentPage,
    pages: ['login', 'signUp', 'panel'],
    children: [
      <Login key='Login' />,
      <SignUp key='SignUp' />,
      <Panel key='Panel' />
    ]
  })

  const handleInfo = () => {
    console.log('### INFO ###')
    console.log('current user', getID())
    console.log('transactions', getAllTransactions())
    console.log('clients', getAllClients())
  }

  return (
    <div class='relative max-w-[2000px]'>
      <h1 class='font-bold text-5xl text-center pt-14 f'>Banco personal</h1>
      <h4 class='text-center pt-3 font-semibold text-lg f'>
        Tristan Vidal - 2022
      </h4>
      <container class=''>
        {page}
      </container>
      <ErrorToast />
      <span
        class='max-w-xs block m-auto pointer text-white border-2 bg-black hover:bg-white hover:font-bold hover:text-black hover:border-black transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center'
        onClick={() => handleInfo()}
      >
        Info
      </span>
    </div>
  )
}

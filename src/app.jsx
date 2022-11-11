import './app.css'

import usePage from './hooks/usePage'
import { currentPage } from './signals/signal'

import Login from './components/Login'
import SignUp from './components/SingUp'
import Panel from './components/Panel'
import ErrorToast from './components/ErrorToast'

export function App () {
  const page = usePage({
    currentPage,
    pages: ['login', 'signUp', 'panel'],
    children: [
      <Login key='login' />,
      <SignUp key='signup' />,
      <Panel key='panel' />
    ]
  })

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
    </div>
  )
}

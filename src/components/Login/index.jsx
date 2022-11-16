import { signal } from '@preact/signals'
import { loginAccount, changePage, setID, currentBalance, getCurrentBalance, getClientTransactions } from '../../signals/signal'

import useToast from '../../hooks/useToast'

export default function Login () {
  const currentUser = signal({
    accountID: '666',
    accountPIN: ''
  })

  const handleLogin = () => {
    const success = loginAccount(
      currentUser.value.accountID,
      currentUser.value.accountPIN
    )

    if (success) {
      setID(currentUser.value.accountID)
      changePage('panel')
      currentBalance.value = getCurrentBalance()
      getClientTransactions()
    } else {
      useToast('Cuenta o PIN incorrectos')
    }
  }

  return (
    <div
      id='login'
      class='p-10 w-96 h-96 max-w-sm bg-white rounded-xl border border-black shadow-md sm:p-6 md:p-8 my-20 m-auto fd'
    >
      <span class='font-bold text-xl mb-4 block'>
        Ingresar o crear una cuenta
      </span>
      <div class='space-y-4'>
        <div>
          <label
            for='dni'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            Número de cédula
          </label>
          <input
            onChange={e => {
              currentUser.value.accountID = e.target.value
            }}
            type='text'
            name='dni'
            id='dni'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='####'
            required
            autocomplete='username'
            value={currentUser.value.accountID}
          />
        </div>
        <div>
          <label
            for='pin'
            class='block mb-2 text-base font-medium text-gray-900 '
          >
            PIN de acceso
          </label>
          <input
            onChange={e => {
              currentUser.value.accountPIN = e.target.value
            }}
            type='text'
            name='pin'
            id='pin'
            placeholder='••••••••'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required
            autocomplete='current-password'
            value={currentUser.value.accountPIN}
          />
        </div>
        <button
          onClick={handleLogin}
          id='login '
          class='w-full text-white border-2 bg-black hover:bg-white hover:font-bold hover:text-black hover:border-black transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center'
        >
          Entrar
        </button>
        <button
          onClick={() => changePage('signUp')}
          id='change-register'
          class='w-2/4 block m-auto text-white border-2 bg-black hover:bg-white hover:font-bold hover:text-black hover:border-black transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center'
        >
          Registrarse
        </button>
      </div>
    </div>
  )
}

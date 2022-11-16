import { signal } from '@preact/signals'
import { registerAccount, changePage } from '../../signals/signal'
import useToast from '../../hooks/useToast'

const pin = signal(0)
const currentUser = signal({
  accountName: 'Tristan Vidal',
  accountID: '666',
  age: '12'
})

export default function SignUp () {
  const handleSignUp = () => {
    const { accountName, accountID, age } = currentUser.value

    if (accountName === '' || accountID === '' || age === '') {
      useToast('Se deben llenar todos los campos')
      return false
    }

    pin.value = registerAccount(accountName, accountID, age)

    if (pin.value === 0) {
      useToast('Ya existe esa cuenta')
      return false
    }
  }

  return (
    <div
      id='register'
      class='p-10 w-96 max-w-sm bg-white rounded-xl border border-black shadow-md sm:p-6 md:p-8 col-span-3 my-10 m-auto fd'
    >
      <span class='font-bold text-xl mb-4 block'>
        Ingresar o crear una cuenta
      </span>
      <div class='space-y-4'>
        <div>
          <label
            for='name'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            Nombre
          </label>
          <input
            onChange={e => {
              currentUser.value.accountName = e.target.value
            }}
            type='text'
            name='name'
            id='name'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='####'
            required
            autocomplete='username'
            value={currentUser.value.accountName}
          />
        </div>
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
            for='age'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            Edad
          </label>
          <input
            onChange={e => {
              currentUser.value.age = e.target.value
            }}
            type='number'
            name='age'
            id='age'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='####'
            value={currentUser.value.age}
          />
        </div>
        <div>
          <label
            for='password'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            PIN de acceso
          </label>

          <div
            id='pin-loader'
            class='font-bold text-center rounded-xl border border-gray-300 p-4 flex justify-center h-[55px]'
          >
            {pin.value === 0
              ? (
                <>
                  <div class='bg-slate-700 rounded-xl w-4 h-4 animate-pulse' />
                  <div class='bg-slate-700 rounded-xl w-4 h-4 mx-1 mr-0 animate-pulse' />
                  <div class='bg-slate-700 rounded-xl w-4 h-4 mx-1 animate-pulse' />
                  <div class='bg-slate-700 rounded-xl w-4 h-4 animate-pulse' />
                </>
                )
              : (
                  pin.value
                )}
          </div>
        </div>
        <button
          onClick={handleSignUp}
          id='register-button'
          class='w-full text-white border-2 bg-black hover:bg-white hover:font-bold hover:text-black hover:border-black transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center'
        >
          Registrarse
        </button>
        <button
          onClick={() => changePage('login')}
          id='change-login'
          class='w-2/4 block m-auto text-white border-2 bg-black hover:bg-white hover:font-bold hover:text-black hover:border-black transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center'
        >
          Entrar
        </button>
      </div>
    </div>
  )
}

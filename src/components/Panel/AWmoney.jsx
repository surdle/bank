import { signal } from '@preact/signals'
import { depositMoney, withdrawMoney, currentUser } from '../../signals/signal'
import useToast from '../../hooks/useToast'

const quantity = signal(0)

export default function AWmoney () {
  const addMoney = () => {
    quantity.value = Number(quantity.value)
    if (quantity.value <= 0 || isNaN(quantity.value)) {
      console.log('Error', quantity.value)
      useToast('La cantidad debe ser mayor a 0 y ser un número')
      return false
    }

    depositMoney(quantity.value)
  }

  const removeMoney = () => {
    quantity.value = Number(quantity.value)
    if (quantity.value <= 0 || isNaN(quantity.value)) {
      console.log('Error', quantity.value)
      useToast('La cantidad debe ser mayor a 0 y ser un número')
      return false
    }

    if (quantity.value > currentUser.value.balance) {
      console.log('Error', quantity.value)
      useToast('Error: La cantidad no puede ser mayor a tu saldo')
      return false
    }

    withdrawMoney(quantity.value)
  }

  return (
    <div class='p-4 w-96 max-w-sm bg-white rounded-xl border border-black shadow-md sm:p-6 md:p-8 fd '>
      <span class='font-bold text-xl mb-4 block'>
        Retirar/Ingresar dinero
      </span>
      <div class='space-y-4'>
        <div>
          <label
            for='pin'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            Cantidad
          </label>
          <input
            value={quantity.value}
            type='text'
            name='pin'
            id='pin'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='####'
            required
            autocomplete='username'
            onInput={(e) => {
              quantity.value = e.target.value
            }}
          />
        </div>
        <div class='flex justify-center content-center'>
          <button
            type='submit'
            class='m-auto w-36 text-white border-2 bg-black hover:bg-white hover:font-bold hover:text-black hover:border-black transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center'
            onClick={() => addMoney()}
          >
            Ingresar
          </button>
          <button
            type='submit'
            class='m-auto w-36 block text-white border-2 bg-black hover:bg-white hover:font-bold hover:text-black hover:border-black transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center'
            onClick={() => removeMoney()}
          >
            Retirar
          </button>
        </div>
      </div>
    </div>
  )
}

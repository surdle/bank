import { newTransaction, getID, getCurrentBalance, getAllClients, depositMoney, withdrawMoney, getClientTransactions } from '../../signals/signal'
import { signal } from '@preact/signals'
import useToast from '../../hooks/useToast'

export default function MoneyTransfer () {
  const data = signal({
    receiver: '123',
    quantity: 1,
    desc: 'Descripción'
  })

  const handleTransfer = () => {
    if (data.value.receiver === getID()) {
      useToast('No puedes transferirte dinero a ti mismo')
      return false
    }

    if (data.value.quantity <= 0 || isNaN(data.value.quantity)) {
      useToast('La cantidad debe ser mayor a 0 y ser un número')
      return false
    }

    if (data.value.quantity > getCurrentBalance()) {
      useToast('La cantidad no puede ser mayor a tu saldo')
      return false
    }

    if (data.value.desc.length < 5) {
      useToast('La descripción debe tener al menos 5 caracteres')
      return false
    }

    const exist = getAllClients().find((client) => client.id === data.value.receiver)
    if (!exist) {
      useToast('No existe una cuenta con ese número de cédula')
      return false
    }

    console.log(data.value)
    const { receiver, quantity, desc } = data.value
    depositMoney(receiver, +quantity, true)
    withdrawMoney(getID(), +quantity, true)
    newTransaction(getID(), +quantity, desc, receiver)
    getCurrentBalance()
    getClientTransactions()
  }
  return (
    <div class='p-4 w-96 max-w-sm bg-white rounded-xl border border-black shadow-md sm:p-6 md:p-8 fd'>
      <span class='font-bold text-xl mb-4 block'>Tranferir dinero</span>
      <div class='space-y-4' action='#'>
        <div>
          <label
            for='pin'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            Número de cédula para tranferir
          </label>
          <input
            onInput={(e) => {
              data.value.receiver = e.target.value
            }}
            type='text'
            name='pin'
            id='TransferID'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='####'
            required
            autocomplete='username'
            value={data.value.receiver}
          />
        </div>
        <div>
          <label
            for='quantity'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            Cantidad
          </label>
          <input
            onInput={(e) => {
              data.value.quantity = e.target.value
            }}
            type='number'
            name='quantity'
            id='quantity'
            placeholder='••••••••'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required
            autocomplete='current-password'
            value={data.value.quantity}
          />
        </div>
        <div>
          <label
            for='description'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            descripción
          </label>
          <input
            onInput={(e) => {
              data.value.desc = e.target.value
            }}
            type='text'
            name='description'
            id='description'
            placeholder='••••••••'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required
            autocomplete='current-password'
            value={data.value.desc}
          />
        </div>
        <button
          onClick={() => handleTransfer()}
          type='submit'
          class='w-full text-white border-2 bg-black hover:bg-white hover:font-bold hover:text-black hover:border-black transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center'
        >
          Enviar
        </button>
      </div>
    </div>
  )
}

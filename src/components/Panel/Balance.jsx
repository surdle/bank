import { currentUser } from '../../signals/signal'

export default function Balance () {
  const { balance } = currentUser.value
  return (
    <div class='p-4 w-96 max-w-sm bg-white rounded-xl border border-black shadow-md sm:p-6 md:p-8 fd'>
      <span class='font-bold text-xl mb-4 block'>Saldo actual</span>
      <div class='space-y-4'>
        <div>
          <label
            for='pin'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            Saldo
          </label>
          <span class='font-bold rounded-xl border border-gray-300 py-2 px-4 block'>
            {(balance).toLocaleString('en-US', {
              style: 'currency',
              currency: 'COP'
            })}
          </span>
        </div>
      </div>
    </div>
  )
}

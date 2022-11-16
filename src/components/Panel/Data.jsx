import { getData } from '../../signals/signal'

export default function Data () {
  const { name, id, age, creationDate } = getData()
  return (
    <div class='p-4 w-96 max-w-sm bg-white rounded-xl border border-black shadow-md sm:p-6 md:p-8 fd'>
      <span class='font-bold text-xl mb-4 block'>Datos personales</span>
      <div class='space-y-4'>
        <div>
          <label
            for='pin'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            Nombre cliente
          </label>
          <span class='font-bold rounded-xl border border-gray-300 py-2 px-4 block'>
            {name}
          </span>
        </div>
        <div>
          <label
            for='pin'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            Número de cédula
          </label>
          <span class='font-bold rounded-xl border border-gray-300 py-2 px-4 block'>
            {id}
          </span>
        </div>
        <div>
          <label
            for='pin'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            Edad
          </label>
          <span class='font-bold rounded-xl border border-gray-300 py-2 px-4 block'>
            {age}
          </span>
        </div>
        <div>
          <label
            for='pin'
            class='block mb-2 text-base font-medium text-gray-900'
          >
            Fecha de creación de la cuenta
          </label>
          <span class='font-bold rounded-xl border border-gray-300 py-2 px-4 block'>
            {new Date(creationDate).toUTCString()}
          </span>
        </div>
      </div>
    </div>
  )
}

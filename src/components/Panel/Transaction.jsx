export default function Transaction (props) {
  const { origin, value, date, receiver, description } = props.transaction
  return (
    <div class='fd'>
      <div class='grid grid-cols-1 xl:grid-cols-7 items-center gap-3 pb-10'>
        <div class='text-center'>
          <span class='block mb-2 text-base font-medium text-gray-900'>
            Origen
          </span>
          <span class='font-bold rounded-xl border border-gray-300 py-2 px-4 block'>
            {origin}
          </span>
        </div>

        <div class='text-center'>
          <span class='block mb-2 text-base font-medium text-gray-900'>
            Receptor
          </span>
          <span class='font-bold rounded-xl border border-gray-300 py-2 px-4 block'>
            {receiver}
          </span>
        </div>

        <div class='text-center'>
          <span class='block mb-2 text-base font-medium text-gray-900'>
            Cantidad
          </span>
          <span class='font-bold rounded-xl border border-gray-300 py-2 px-4 block'>
            {value}
          </span>
        </div>

        <div class='text-center col-span-2'>
          <span class='block mb-2 text-base font-medium text-gray-900'>
            Descripción
          </span>
          <span class='font-bold rounded-xl border border-gray-300 py-2 px-4 block'>
            {description}
          </span>
        </div>
        <div class='text-center col-span-2'>
          <span class='block mb-2 text-base font-medium text-gray-900'>
            Fecha
          </span>
          <span class='font-bold rounded-xl border border-gray-300 py-2 px-4 block'>
            {date}
          </span>
        </div>
      </div>
    </div>
  )
}

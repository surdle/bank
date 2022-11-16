import { changePage, setID, currentBalance } from '../../signals/signal'

export default function LogOut () {
  const handleLogOut = () => {
    setID('')
    currentBalance.value = 0

    changePage('login')
  }

  return (
    <div class='py-4 flex text-center justify-center fd'>
      <span class='font-bold self-center pr-8'>Bienvenido</span>
      <button
        onClick={() => handleLogOut()}
        id='change-login'
        class='w-2/4 block text-white border-2 bg-black hover:bg-white hover:font-bold hover:text-black hover:border-black transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center max-w-[150px]'
      >
        Cerrar sesión
      </button>
    </div>

  )
}

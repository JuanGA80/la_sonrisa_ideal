import { useRef, useState } from 'react'
import logo from '../assets/logo.webp'
import useOnClickOutside from '../hooks/useOnClickOutside'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const NavBar = ({ Function }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navbar = useRef(null)

  const handleClickOutsideFn = () => setIsOpen(false)

  useOnClickOutside(navbar, handleClickOutsideFn)

  return (
    <header className='w-full flex justify-center items-center flex-col shadow-md'>
      <nav className='w-full px-4 flex justify-between items-center max-w-7xl flex-col'>
        <div className='w-full flex justify-between items-center my-2 relative'>
          <Link to='/' aria-label='Ir a la página principal' className='w-3/5 max-w-52'>
            <img className='w-16' src={logo} alt='Logo La sonrisa ideal' width='350' height='123' />
          </Link>
          <div ref={navbar}>
            <button
              className='border-none bg-transparent flex justify-between items-center flex-col w-10 h-6 cursor-pointer transition lg:hidden'
              aria-label='Menu'
              onClick={() => setIsOpen(!isOpen)}
            >
              <span aria-hidden className={`w-10 h-1 rounded-lg bg-primary transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span aria-hidden className={`w-10 h-1 rounded-lg bg-primary transition ${isOpen ? 'scale-0' : ''}`} />
              <span aria-hidden className={`w-10 h-1 rounded-lg bg-primary transition ${isOpen ? '-rotate-45 -translate-y-3' : ''}`} />
            </button>
            <ul className={`w-[90%] absolute top-[88px] right-4 flex flex-col origin-top-right lg:items-center p-4 z-20 ${isOpen ? 'scale-1' : 'scale-0'} lg:p-0 font-medium border border-gray-200 rounded-lg bg-gray-200 transition-all duration-300 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white lg:scale-100 lg:static lg:-translate-x-0 lg:translate-y-0 lg:w-fit`}>
              <li>
                <Link to='/' className='block py-2 px-3 text-white bg-primary rounded transition lg:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl lg:text-secondary' aria-current='page'>Inicio</Link>
              </li>
              <li>
                <Link to='/nosotros' onClick={() => Function()} className='block py-2 px-3 transition text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl'>Nosotros</Link>
              </li>
              <li>
                <a href='/#services' onClick={() => Function()} className='block py-2 px-3 transition text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl'>Servicios</a>
              </li>
              <li>
                <a href='/#promotion' className='block py-2 px-3 text-gray-900 transition rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl'>Promociones</a>
              </li>
              <li>
                <a href='/#location' onClick={() => Function()} className='block py-2 px-3 text-gray-900 transition rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl'>Ubicación</a>
              </li>
              <li>
                <a href='tel:4441340656' className='block py-2 px-3 text-gray-900 transition rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 lg:text-xl'>Contacto</a>
              </li>
              <li>
                <a href='tel:4441992010' className='block py-2 px-3 text-white transition text-nowrap rounded bg-primaryBlue hover:scale-105 lg:py-2 lg:px-4 lg:text-xl'>Urgencias 24/7</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

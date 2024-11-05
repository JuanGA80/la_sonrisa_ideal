import { Phone } from './Phone'
import { WhatsApp } from './WhatsApp'
import { useState, useEffect, useCallback } from 'react'
import '../index.css'

export const ButtonFixed = () => {
  const end = document.getElementById('root').clientHeight
  const endHeight = end - 800
  const [show, setShow] = useState(false)
  const [y, setY] = useState(document.scrollingElement.scrollHeight)

  const handleNavigation = useCallback(() => {
    if (y < endHeight) {
      setShow(false)
    } else if (y >= endHeight) {
      setShow(true)
    }
    setY(window.scrollY)
  }, [y])

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <div className={`button-fixed w-20 h-20 flex justify-center items-center flex-col fixed bottom-4 right-4 transition z-10 ${show ? 'scale-0' : 'scale-100'} md:w-24 md:h-24`}>
      <button
        className='w-16 h-16 z-10 rounded-full absolute bottom-0 right-0 bg-primaryBlue border-white border-2 flex justify-center items-center transition md:w-20 md:h-20 hover:transition hover:bg-primaryBlue/70'
        aria-label='Abrir menu de contacto'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-messages w-10'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10' />
          <path d='M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2' />
        </svg>
      </button>
      <a
        className='w-16 h-16 tel rounded-full absolute scale-95 bottom-0 right-0 bg-blue-900 border-blue-900 border-2 flex justify-center items-center text-white transition-all md:w-20 md:h-20 hover:transition hover:bg-blue-900/80'
        href='tel:4441340656'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Agendar cita'
      >
        <Phone className='w-8' />
      </a>
      <a
        className='w-16 h-16 whats rounded-full absolute scale-95 bottom-0 right-0 bg-green-500 border-green-500 border-2 flex justify-center items-center text-white transition-all md:w-20 md:h-20 hover:transition hover:bg-green-500/80'
        href='https://wa.me/524441340656?text=Buenas%20tardes,%20solicito%20informaci%C3%B3n%20sobre'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Agendar cita'
      >
        <WhatsApp className='w-8' />
      </a>
    </div>
  )
}

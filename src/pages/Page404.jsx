import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export const Page404 = () => {
  return (
    <section className='w-full h-svh'>
      <NavBar />
      <div id='error-page' className='w-full h-[500px] flex justify-center items-center flex-col'>
        <h1 className='uppercase font-semibold text-4xl'>Error 404</h1>
        <p className='text-xl'>Lo siento, la página que buscas no existe.</p>
        <a href='/' className='mt-4 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>Ir al inicio</a>
      </div>
      <Footer />
    </section>
  )
}

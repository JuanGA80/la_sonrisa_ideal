// eslint-disable-next-line react/prop-types
export const CardAbout = ({ children, imgSrc, imgAlt, name, reverse }) => {
  return (
    <article className='w-full flex justify-center items-center flex-col rounded-xl shadow-xl shadow-gray-600/80 md:flex-row'>
      <img src={imgSrc} alt={imgAlt} className={`w-full rounded-t-xl md:max-w-72 ${reverse ? 'md:order-2 md:rounded-r-xl md:rounded-tl-none' : 'md:rounded-l-xl md:rounded-tr-none'} lg:max-w-md`} />
      <div className='px-4 w-full flex justify-center items-center flex-col py-8 text-center md:px-20'>
        <h4 className='font-bold text-xl text-secondary mb-2 lg:text-3xl'>Conoce a nuestro especialista</h4>
        <h3 className='font-semibold text-2xl text-gray-700'>{name}</h3>
        <ul className='my-4 list-disc color text-lg text-gray-700 text-start pl-5 gap-2'>
          {children}
        </ul>
        <a
          data-ripple-light='true'
          className='select-none rounded-lg bg-primaryBlue py-3 px-6 text-center align-middle font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          href='/nosotros'
        >
          Ver curriculum
        </a>
      </div>
    </article>
  )
}

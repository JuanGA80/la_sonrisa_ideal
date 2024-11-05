// eslint-disable-next-line react/prop-types
export const CardPromo = ({ imgSrc, alt }) => {
  return (
    <article className='w-full flex justify-center items-center flex-col group max-h-fit	'>
      <a
        href='https://wa.me/524441340656'
        target='_blank'
        rel='noopener noreferrer'
        title='Ir al WhatsApp de La Sonrisa Ideal'
      >
        <img
          src={imgSrc}
          alt={alt}
          className='w-full rounded-2xl mb-5 border border-tertiary-90'
          width='500'
          height='500'
        />
      </a>
      <a
        data-ripple-light='true'
        className='select-none rounded-lg bg-primaryBlue py-3 px-6 text-center align-middle font-semibold text-white shadow-md shadow-blue-500/20 transition-all group-hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
        href='https://wa.me/524441340656'
        target='_blank' rel='noreferrer'
      >
        Agenda tu cita
      </a>
    </article>
  )
}

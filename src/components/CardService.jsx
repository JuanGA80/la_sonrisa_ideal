// eslint-disable-next-line react/prop-types
export const CardService = ({ title, description, img, alt }) => {
  return (
    <article className='relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl shadow-gray-600/80'>
      <header className='relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600'>
        <img
          className='w-full aspect-[5/4] object-cover'
          src={img}
          alt={alt}
          width='500'
          height='400'
        />
      </header>
      <section className='p-6'>
        <h3 className='mb-2 block text-xl font-semibold leading-snug tracking-normal antialiased'>
          {title}
        </h3>
        <p className='block text-base leading-relaxed text-inherit antialiased '>
          {description}
        </p>
      </section>
      <footer className='p-6 pt-0'>
        <a
          data-ripple-light='true'
          className='select-none rounded-lg bg-primaryBlue py-3 px-6 text-center align-middle text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:text-sm'
          href={`https://wa.me/524441340656?text=Buenas%20tardes,%20solicito%20informaci%C3%B3n%20sobre%20su%20tratamiento%20de%20${title}`}
          rel='noopener noreferrer'
          target='_blank'
          title={`Agenda tu cita para tu tratamiento de ${title}`}
        >
          Agenda tu cita
        </a>
      </footer>
    </article>
  )
}

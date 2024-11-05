import { WhatsApp } from './WhatsApp'
import { Phone } from './Phone'

// eslint-disable-next-line react/prop-types
export const Map = ({ divRef }) => {
  return (
    <div
      className='px-4 mt-10 md:flex md:justify-center md:items-center md:w-full'
      id='location'
      ref={divRef}
    >
      <iframe
        title='Mapa'
        className='w-full min-h-[400px] rounded-xl md:max-w-[650px]'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.8745495347576!2d-101.00310427154453!3d22.14510029873213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a991d83a7a339%3A0x226db773d07a8611!2sLa%20sonrisa%20ideal!5e0!3m2!1ses-419!2smx!4v1725986277748!5m2!1ses-419!2smx'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
      <div className='container-map rounded-xl py-7 px-4 my-5 text-white text-center flex justify-center items-center flex-col bg-gradient-to-tr from-primaryBlue to-blue-600 md:shadow-gray-800 md:shadow-[-19px_3px_22px_-11px] md:h-[600px] md:max-w-[500px] md:p-8'>
        <h2 className=' text-2xl mb-4 font-semibold'>Contáctanos</h2>
        <p className=' mb-6 font-semibold'>
          ¿Tienes alguna necesidad dental en especial? Te podemos ayudar.
          Déjanos tus datos y nuestro equipo se pondrá en contacto contigo lo
          más pronto posible. 4441340656
        </p>
        <h3 className='font-semibold text-xl'>Dirección</h3>
        <p className=' mb-6 font-semibold'>
          Av Scop 826, Jardín, Fundadores, 78270 San Luis Potosí, S.L.P.
        </p>
        <h4 className='font-semibold text-xl'>Horario</h4>
        <p className='font-semibold'>
          Lunes a Viernes: 10am - 2pm y 4pm - 8:30pm
        </p>
        <p className='font-semibold'>Sábado: 9:30am - 2:30pm</p>
        <p className=' mb-6 font-semibold'>Urgencias 24hrs</p>
        <div className='flex flex-col gap-4 items-center justify-center md:flex-row'>
          <a
            className='py-3 px-4 bg-white text-gray-800 font-semibold rounded-lg transition-all ease-in-out flex justify-center items-center hover:transition-all hover:scale-95'
            href='https://wa.me/524441340656'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <WhatsApp className='w-4 h-4 mr-2' /> Agenda tu cita
          </a>
          <a
            className='py-3 px-4 bg-red-700 text-white/90 font-semibold rounded-lg transition-all ease-in-out flex justify-center items-center hover:transition-all hover:scale-95'
            href='tel:4441340656'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <Phone className='w-4 h-4 mr-2' /> Urgencias 24/7
          </a>
        </div>
      </div>
    </div>
  )
}

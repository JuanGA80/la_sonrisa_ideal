import paciente1 from '../assets/logo-google.webp'
import { CardReview } from './CardReview'
import { Splide } from '@splidejs/react-splide'
// Default theme
import '@splidejs/react-splide/css'
import '../index.css'

export const Reviews = () => {
  const infoReview = [
    {
      name: 'Tania García',
      textReview: 'Este establecimiento ha sido de los mejores que he visitado. Ambos médicos profesionales, atentos y sobre todo con la mejor actitud de atender a sus pacientes.',
      imgSrc: paciente1
    },
    {
      name: 'Hector Pérez',
      textReview: 'Excelente servicio! Ambos dentistas son muy profesionales, respetan el horario de tu cita y  la atención, así como el servicio es muy buena, super recomendado.',
      imgSrc: paciente1
    },
    {
      name: 'Malleli Ramirez',
      textReview: 'El mejor trabajo que me han realizado!!! Son super profesionales, limpios y sobre todo excelente servicio con precio accesible. Muy recomendado',
      imgSrc: paciente1
    },
    {
      name: 'Paola Julieta Rivera Velasco',
      textReview: 'Súper profesionales, una atención excelente, muy puntuales y súper higiénicos, siempre muy atentos y te explican todo, con atención personalizada',
      imgSrc: paciente1
    },
    {
      name: 'Eusebio Gutierrez Barba',
      textReview: 'Me encanto el servicio, muy profesional y recomendable.',
      imgSrc: paciente1
    },
    {
      name: 'Hector Pérez',
      textReview: 'Excelente servicio! Ambos dentistas son muy profesionales, respetan el horario de tu cita y  la atención, así como el servicio es muy buena, super recomendado.',
      imgSrc: paciente1
    },
    {
      name: 'Hector Pérez',
      textReview: 'Excelente servicio! Ambos dentistas son muy profesionales, respetan el horario de tu cita y  la atención, así como el servicio es muy buena, super recomendado.',
      imgSrc: paciente1
    },
    {
      name: 'Hector Pérez',
      textReview: 'Excelente servicio! Ambos dentistas son muy profesionales, respetan el horario de tu cita y  la atención, así como el servicio es muy buena, super recomendado.',
      imgSrc: paciente1
    },
    {
      name: 'Hector Pérez',
      textReview: 'Excelente servicio! Ambos dentistas son muy profesionales, respetan el horario de tu cita y  la atención, así como el servicio es muy buena, super recomendado.',
      imgSrc: paciente1
    },
    {
      name: 'Hector Pérez',
      textReview: 'Excelente servicio! Ambos dentistas son muy profesionales, respetan el horario de tu cita y  la atención, así como el servicio es muy buena, super recomendado.',
      imgSrc: paciente1
    }
  ]

  return (
    <div className='w-full flex justify-center items-center py-10 bg-primaryBlue'>
      <div className='w-full h-full flex justify-center flex-col items-center max-w-5xl px-4 gap-10'>
        <div className='w-full flex justify-center items-center gap-4 lg:gap-8'>
          <hr className='w-full border-2 border-white rounded-lg max-w-96' />
          <h2 className='text-nowrap text-3xl font-bold text-white uppercase lg:text-5xl'>Testimonios</h2>
          <hr className='w-full border-2 border-white rounded-lg max-w-96' />
        </div>
        <Splide
          aria-label='Reseñas de pacientes'
          options={{
            rewind: true,
            width: '100%',
            perPage: 3,
            padding: '1rem',
            gap: '2rem',
            pagination: false,
            pauseOnHover: true,
            pauseOnFocus: true,
            autoplay: true,
            role: 'complementary',
            classes: {
              prev: 'splide__arrow--prev class-prev',
              next: 'splide__arrow--next class-next'
            },
            breakpoints: {
              767: { perPage: 1 },
              1023: { perPage: 2 }
            }
          }}
          onMounted={(splide) => {
            const slides = splide.Components.Elements.slides
            slides.forEach(slide => {
              slide.setAttribute('role', 'none')
            })
          }}
        >
          {
            infoReview.map((item, i) => (
              <CardReview
                key={i}
                name={item.name}
                textReview={item.textReview}
                imgSrc={item.imgSrc}
                alt={`Imagen de perfil de ${item.name}`}
              />
            ))
          }
        </Splide>
      </div>
    </div>
  )
}

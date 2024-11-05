import { CardService } from './CardService'
import { TitleSection } from './TitleSection'
import ortodoncia from '../assets/services/brackets.webp'
import endodoncia from '../assets/services/endodoncia.webp'
import cirugia from '../assets/services/cirugia.webp'
import protesis from '../assets/services/prosthesis.webp'
import periodoncia from '../assets/services/periodoncia.webp'
import smile from '../assets/services/ortopedia.webp'

// eslint-disable-next-line react/prop-types
export const Services = ({ divRef }) => {
  const servicesInformation = [
    {
      id: 1,
      title: 'Ortodoncia',
      description: 'Previene y trata irregularidades dentales. Desde tratamientos que generen una buena mordida hasta tratamientos de alineación dental.',
      img: ortodoncia,
      alt: 'Tratamiento de ortodoncia'
    },
    {
      id: 2,
      title: 'Periodoncia',
      description: 'Trata enfermedades de las encías y tejidos circundantes, cirugía y mantenimiento a largo plazo para prevenir la pérdida de dientes.',
      img: periodoncia,
      alt: 'Tratamiento de periodoncia'
    },
    {
      id: 6,
      title: 'Prótesis',
      description: 'Restaura la función y estética dental. Incluye procedimientos como coronas, puentes, implantes dentales y prótesis removibles.',
      img: protesis,
      alt: 'Tratamiento de Rehabilitación Oral'
    },
    {
      id: 3,
      title: 'Endodoncia',
      description: 'Trata las enfermedades de la pulpa dental, como caries profundas o infecciones. El objetivo es salvar el diente y aliviar el dolor.',
      img: endodoncia,
      alt: 'Tratamiento de endodoncia'
    },
    {
      id: 4,
      title: 'Ortopedia',
      description: 'La ortopedia dental corrige y guía el crecimiento de huesos y músculos faciales para mejorar la alineación dental.',
      img: smile,
      alt: 'Diseño de Sonrisa'
    },
    {
      id: 5,
      title: 'Cirugía',
      description: 'Las cirugías llegan a ser necesarias, desde extracciones dentales hasta cirugías maxilofaciales de terceros molares.',
      img: cirugia,
      alt: 'Cirugías'
    }
  ]

  return (
    <section className='w-full flex justify-center items-center mt-6' id='services' ref={divRef}>
      <div className='w-full px-4 flex justify-center items-center flex-col max-w-7xl'>
        <TitleSection title='Servicios' />
        <section className='grid grid-cols-1 mt-10 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-20'>
          {
            servicesInformation.map((item) => (
              <CardService
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
                alt={item.alt}
              />
            ))
          }
        </section>
      </div>
    </section>
  )
}

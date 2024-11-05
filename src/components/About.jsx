import team from '../assets/dentist.webp'
import { CardColor } from './CardColor'
import { Certificate } from './Certificate'
import { Star } from './Star'
import { TitleSection } from './TitleSection'
import { Tool } from './Tool'
import { Tooth } from './Tooth'
// eslint-disable-next-line react/prop-types
export const About = ({ divRef }) => {
  const valuePoints = [
    {
      id: 1,
      icon: <Star className='w-7 h-7 text-white mr-2' />,
      title: 'Atención Integral'
    },
    {
      id: 2,
      icon: <Tool className='w-7 h-7 mr-2 text-white' />,
      title: 'Enfoque Estético'
    },
    {
      id: 3,
      icon: <Tooth className='w-7 h-7 mr-2 text-white' />,
      title: 'Atención Profesional'
    },
    {
      id: 4,
      icon: <Certificate className='w-7 h-7 mr-2 text-white' />,
      title: 'Confianza y Calidad'
    }
  ]

  return (
    <div className='w-full flex justify-center items-center' id='about' ref={divRef}>
      <section className='px-4 w-full max-w-7xl grid grid-cols-1 place-content-center place-items-center my-10 md:grid-cols-2 md:gap-7'>
        <img src={team} alt='Fotografía equipo LuDaDental' className='w-full max-w-md mb-3 rounded-2xl' width='585' height='786' />
        <article className='w-full mb-3'>
          <TitleSection title='¿Quiénes somos?' />
          <p className='text-lg mt-4'>
            En nuestra clínica dental, trabajamos día a día para ofrecer “lo que tú esperas y tu sonrisa necesita”. Nos enorgullece brindar una atención personalizada y de alta calidad en un ambiente familiar y acogedor. Contamos con un equipo de profesionales comprometidos, que se esfuerzan por estar a la vanguardia en tratamientos odontológicos, utilizando tecnología avanzada para asegurar resultados excepcionales.
          </p>
          <p className='text-lg mt-2'>Nuestro objetivo es brindar atención dental de calidad, con tratamientos personalizados hacia nuestros pacientes para mejorar su calidad de vida y sus necesidades bucodentales.</p>
          <ul className='grid w-full grid-cols-1 place-content-center place-items-center gap-3 mt-7 lg:grid-cols-2'>
            {
              valuePoints.map((item) => (
                <CardColor key={item.id}>
                  {item.icon}
                  <h3 className='text-white font-semibold text-xl'>{item.title}</h3>
                </CardColor>
              ))
            }
          </ul>
        </article>
      </section>
    </div>
  )
}

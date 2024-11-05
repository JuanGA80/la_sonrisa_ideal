import MissionImg from '../../assets/mission.webp'
import Vision from '../../assets/consultorio.webp'
import Valores from '../../assets/valores.webp'

const INFO = [
  {
    img: MissionImg,
    title: 'Misión',
    description: 'Otorgar a toda la familia una atención dental integral de calidad basada en la excelencia, en un ambiente grato, acogedor y tranquilo. Contamos con profesionales comprometidos y altamente capacitados, dispuestos a brindar una atención bajo los principios de respeto, amabilidad, honestidad y transparencia.'
  },
  {
    img: Vision,
    title: 'Visión',
    description: 'Posicionarse como una clínica dental especializada en tratamientos de ortodoncia, de excelencia que permita mejorar los niveles de salud bucal de nuestra sociedad, buscando la mejor alternativa acorde al presupesto y alcance de nuestros pacientes. En donde se destaque la atención por su calidad, enfoque estético, responsabilidad, respeto, ética profesional y transparencia.'
  },
  {
    img: Valores,
    title: 'Valores',
    description: 'Creemos firmemente en la ética y la transparencia, ofreciendo soluciones claras y honestas para que nuestros pacientes siempre estén bien informados y seguros de las decisiones en su tratamiento. Además, asumimos un fuerte compromiso con la responsabilidad, esforzándonos por garantizar resultados efectivos y duraderos que mejoren la salud y el bienestar de quienes nos confían su cuidado bucal.'
  }
]

export const Mission = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center px-4'>
      <div className='w-full grid gap-6 max-w-6xl rounded-lg p-4 bg-blue-300 lg:p-8 lg:gap-10'>
        {
          INFO.map((item, i) => (
            <article key={i} className='w-full flex flex-col gap-4 md:flex-row md:items-center lg:gap-10'>
              <img className={`w-full rounded-lg md:w-64 md:h-fit lg:w-[450px] lg:aspect-video lg:object-cover ${i === 1 && 'md:order-2'}`} src={item.img} alt={`Fotografía de ${item.title}`} />
              <div className='flex flex-col gap-2'>
                <h3 className='font-semibold text-2xl lg:text-3xl'>{item.title}</h3>
                <p className='lg:text-lg'>{item.description}</p>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

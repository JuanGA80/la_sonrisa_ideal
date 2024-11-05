import { TitleSection } from '../TitleSection'

export const Features = () => {
  return (
    <section className='w-full flex justify-center items-center flex-col md:my-5'>
      <div className='w-full max-w-7xl grid grid-cols-1 gap-6 px-4 text-center md:grid-cols-2 md:gap-9 lg:gap-16'>
        <article className='flex justify-start items-center w-full flex-col'>
          <TitleSection title='Misión' />
          <p className='mt-4 md:text-lg'>En LuDaDental nos comprometemos a proporcionar servicios dentales de alta calidad con un enfoque centrado en el paciente, utilizando tecnología de vanguardia y un equipo altamente capacitado para mejorar la salud bucal y la calidad de vida de nuestros paciente</p>
        </article>
        <article className='flex justify-start items-center w-full flex-col'>
          <TitleSection title='Visión' />
          <p className='mt-4 md:text-lg'>Queremos convertirnos en el referente de excelencia en atención dental en nuestra comunidad, siendo reconocidos por nuestro compromiso con la calidad, la ética profesional y la satisfacción del paciente. Aspiramos a ser líderes en innovación y cuidado integral de la salud oral.</p>
        </article>
      </div>
    </section>
  )
}

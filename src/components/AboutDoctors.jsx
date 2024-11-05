import { CardAbout } from './CardAbout'

import Jesus from '../assets/photo_doc.webp'
import Will from '../assets/photo_jesus.webp'

export const AboutDoctors = () => {
  return (
    <section className='w-full flex justify-center items-center flex-col'>
      <div className='w-full grid grid-cols-1 gap-8 place-content-center max-w-7xl px-4 mb-10'>
        <CardAbout
          name='C.D.E.O. Will Gallegos Gómez'
          imgSrc={Will}
          imgAlt='Foto de perfil del C.D.E.O. Will Gallegos Gómez'
          reverse
        >
          <li><strong>Licenciatura De Cirujano Dentista.</strong> Universidad De Guadalajara. Cucs.</li>
          <li><strong>Diplomado En Ortodoncia.</strong> Avalado Por El Instituto Odontológico De Especialidades, A.C</li>
          <li><strong>Curso Básico Y Avanzado De Mini Implantes Ortodónticos O.S.A.S. </strong>Avalado Por Asociación Mexicana De Ortopedia Maxilar A.C, Amom Y Dewimed Smart Innovation</li>
          <li><strong>Curso De Rehabilitación Estética Adhesiva.</strong> Biotec Studio, Actualización Odontológica</li>
          <li><strong>Diplomado De Biomecánica En Ortodoncia. </strong>Avalado Por Asociación Odontológica Mexicana Para La Enseñanza Y La Investigación / Diagnostico Radiológico Dental Orthodent</li>
        </CardAbout>
        <CardAbout
          name='Dr. Jesus Barajas'
          imgSrc={Jesus}
          imgAlt='Foto de perfil del Dr. Jesus Barajas'
        >
          <li><strong>Licenciatura en Cirujano Dentista.</strong> Graduación con Excelencia Académica, Universidad Guadalajara Lamar.</li>
          <li><strong>Reconocimiento de Excelencia Académica, </strong>por ser un alumno destacado por cinco semestres consecutivos.</li>
          <li><strong>Mención Honorifica. </strong>Otorgada por O. P. D Servicios de Salud Jalisco Región Sanitaria No. XIII, como prestador de Servicio Social</li>
          <li><strong>Curso de encerado de Sector Posterior. </strong>Morfología Dental. </li>
          <li><strong>Curso de Prótesis Total. </strong>Filosofía Total</li>
        </CardAbout>
      </div>
    </section>
  )
}

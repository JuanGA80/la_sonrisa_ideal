import { CardPromo } from './CardPromo'
import promo from '../assets/promos/treatment.webp'
import promo1 from '../assets/promos/start-treatment.webp'
import promo2 from '../assets/promos/caries.webp'
import promo3 from '../assets/promos/caries-child.webp'
import promo4 from '../assets/promos/brackets-child.webp'
import promo5 from '../assets/promos/promo-buen-fin-1.jpg'
import { TitleSection } from './TitleSection'

// eslint-disable-next-line react/prop-types
export const Promotions = ({ divRef }) => {
  const infoPromotions = [
    {
      imgSrc: promo5,
      alt: 'Promoción Buen Fin',
    },
    {
      imgSrc: promo,
      alt: 'Promoción diagnostico de continuidad de ortodoncia'
    },
    {
      imgSrc: promo1,
      alt: 'Promoción inicia tu tratamiento de ortodoncia'
    },
    {
      imgSrc: promo2,
      alt: 'Promoción remoción de caries o empastes'
    },
    {
      imgSrc: promo3,
      alt: 'Promoción remoción de caries para niños'
    },
    {
      imgSrc: promo4,
      alt: 'Promoción inicio de tratamiento de brackets para niños'
    }
  ]

  return (
    <section className='w-full flex justify-center items-center flex-col mt-14 mb-10 md:mt-24 md:mb-20' id='promotion' ref={divRef}>
      <div className='w-full flex justify-center items-center flex-col max-w-7xl px-4'>
        <TitleSection title='Promociones' />
        <div className='w-full mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
          {
            infoPromotions.map((item, i) => (
              <CardPromo
                key={i}
                imgSrc={item.imgSrc}
                alt={item.alt}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

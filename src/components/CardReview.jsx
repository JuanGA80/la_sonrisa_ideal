import { SplideSlide } from '@splidejs/react-splide'
import { Star } from './Star'
// eslint-disable-next-line react/prop-types
export const CardReview = ({ imgSrc, alt, textReview, name }) => {
  return (
    <SplideSlide>
      <article className='w-full flex flex-col rounded-xl shadow-xl p-4 bg-white'>
        <div className=' w-full flex justify-center items-center flex-col gap-5 relative'>
          <p className='text-sm'>{textReview}</p>
          <div className='w-full flex flex-col gap-2 justify-start'>
            <div className='flex gap-2'>
              <img src={imgSrc} alt={alt} className='w-6' />
              <span className='flex'>
                {
                  Array.from({ length: 5 }).map((_, i) => (
                    <Star className='w-5 text-yellow-400 fill-yellow-400' key={i} />
                  ))
                }
              </span>
            </div>
            <p className='text-primary text-start font-semibold text-xs'>{name}</p>
          </div>
        </div>
      </article>
    </SplideSlide>
  )
}

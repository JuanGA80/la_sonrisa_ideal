import { Arrow } from './Arrow'

export const CardHero = ({ title, description }) => {
  return (
    <article className='flex flex-col p-4 bg-white/70 backdrop-blur-sm rounded-xl w-max relative'>
      <h2 className='font-medium mb-2'>{title}</h2>
      <p className=''>{description}</p>
      <Arrow className='w-5 -rotate-45 absolute right-4 bottom-4' />
    </article>
  )
}

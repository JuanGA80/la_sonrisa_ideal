import { useEffect, useRef, useState } from 'react'
import { AnimatedCounter } from 'react-animated-counter'
import { CardColor } from '../CardColor'

export const Counter = ({ end, label, numberIncrement }) => {
  // Integer state
  const [counterValue, setCounterValue] = useState(0)
  const ref = useRef()
  const speed = 150

  useEffect(() => {
    let increment

    const handleObserver = (entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        increment = setInterval(() => {
          setCounterValue((prev) => {
            if (prev < end) {
              return prev + numberIncrement
            } else {
              clearInterval(increment)
              return end
            }
          })
        }, speed)
      }
    }

    const observer = new window.IntersectionObserver(handleObserver, {
      threshold: 0.5
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (increment) clearInterval(increment)
      if (observer && ref.current) observer.unobserve(ref.current)
    }
  }, [end])

  return (
    <CardColor>
      <span ref={ref} className='flex flex-col justify-center items-center text-white'>
        <span className='text-3xl flex gap-1 font-semibold leading-5 mb-2 lg:text-4xl lg:mb-0 transition'>+
          <AnimatedCounter value={counterValue} includeDecimals={false} color='white' fontSize='40px' incrementColor='#7FD0F5' />
        </span>
        <span className='text-xs text-nowrap lg:text-base'>{label}</span>
      </span>
    </CardColor>
  )
}

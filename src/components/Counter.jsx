import { useState, useEffect, useRef } from 'react'
import { CardColor } from './CardColor'

export const Counter = ({ end, label, numberIncrement }) => {
  const [count, setCount] = useState(0)
  const [animate, setAnimate] = useState(false)
  const ref = useRef()
  const speed = 300

  useEffect(() => {
    let increment

    const handleObserver = (entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        increment = setInterval(() => {
          setAnimate(true)
          setCount((prev) => {
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

  useEffect(() => {
    setAnimate(true)
    const timeout = setTimeout(() => setAnimate(false), 300)
    return () => clearTimeout(timeout)
  }, [count])

  return (
    <CardColor>
      <span className='flex flex-col justify-center items-center text-white' ref={ref}>
        <span className={`text-3xl font-semibold leading-5 mb-2 lg:text-4xl lg:mb-0 transition ${animate && 'scale-110 opacity-70'}`}>+{count}</span>
        <span className='text-xs text-nowrap lg:text-base'>{label}</span>
      </span>
    </CardColor>
  )
}

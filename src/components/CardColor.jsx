// eslint-disable-next-line react/prop-types
export const CardColor = ({ children }) => {
  return (
    <li className='w-full flex justify-center items-center p-3 rounded-2xl bg-gradient-to-r from-primaryBlue to-blue-600 transition-all duration-300 hover:shadow-lg hover:duration-300 hover:shadow-blue-400 hover:transition-all'>
      {children}
    </li>
  )
}

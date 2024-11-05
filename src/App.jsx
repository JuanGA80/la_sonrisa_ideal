import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { Home } from './pages/Home'
import { Page404 } from './pages/Page404'

function App () {
  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<AboutPage />} path='/nosotros' />
        <Route element={<Page404 />} path='*' />
      </Routes>
    </>
  )
}

export default App

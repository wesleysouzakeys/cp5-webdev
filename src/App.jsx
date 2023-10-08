import { } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Rodape from './components/Rodape/Rodape'
import './App.css'
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/scrollbar';

function App() {

  return (
    <>
      <div className='app-container'>
        <Nav />
        <Outlet />
        <Rodape />
      </div>
    </>
  )
}

export default App

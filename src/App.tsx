import React, { useEffect } from 'react'
import './App.css'
import figure from './assets/figure.svg'
import Home from './pages/Home'
import Warning from './pages/Warning'
import { Routes, Route } from 'react-router-dom'

const telegram = window.Telegram.WebApp

function App() {
  useEffect(() => {
    telegram.ready()
  }, [])

  return (
    <div className='App'>
      <img className='figure' src={figure} alt='' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='warning' element={<Warning />} />
      </Routes>
      <div className='link'>
        Powered by <a href='https://reactivestation.dev/'>Reactive station</a>
      </div>
    </div>
  )
}

export default App

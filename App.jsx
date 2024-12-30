import './App.css'
import { useState, Profiler, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  const onRenderCallback = (id, phase, actualDuration) => {
  }

  return (
    <Profiler id='Chetan' onRender={onRenderCallback}>
    <>
      <Header />
      <Outlet/>
    </>
    </Profiler>
  )
}

export default App

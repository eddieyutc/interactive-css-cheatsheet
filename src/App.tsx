import React from 'react'
import './App.css'
import { Flexbox } from '@src/topics/flexbox/Flexbox'
import { Navbar } from '@src/components/navbar'

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <Flexbox />
    </React.StrictMode>
  )
}

export default App

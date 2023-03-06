import { useState } from 'react'
import './App.css'
import Calculator from './assets/components/Calculator/Calculator'
import Header from './assets/components/Header/Header'
function App() {

  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  )
}

export default App

import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header>
      <h1>calc</h1>
      <div className='themeSwitchContainer'>
        <span>theme</span>
        <div className='switch'></div>

      </div>
    </header>
  )
}

export default Header

import React from 'react'
import investmentImage from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <div id='header'>
        <img src={investmentImage} alt="Investment_LOGO" />
        <h1>Investment Calculator</h1>
    </div>
  )
}

export default Header
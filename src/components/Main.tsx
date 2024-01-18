import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
      <Menu />
      </div>
    </div>
  )
}

export default Main

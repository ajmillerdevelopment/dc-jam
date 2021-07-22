import React from 'react'
import logoDesk from '../images/dcjam-record.png'
const DesktopHeader = () => {
    return(
      <header className="sm:flex justify-around hidden items-center flex-row py-5">
      <a href="/">
        <h1 className="font-display text-white text-6xl">DC-Jam<img src={logoDesk} alt="" className="logo-mobile inline mx-2 pb-1"/>Records</h1>
      </a>
      </header>
    )
}
export default DesktopHeader
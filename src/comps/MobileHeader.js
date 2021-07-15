import React from 'react'
import drawerIcon from '../images/drawer.svg'
import logoMobile from '../images/DCJam-megaphone-white.png'
const MobileHeader = (props) => {
    return(
      <header className="flex justify-around items-center flex-row py-5">
      <img src={drawerIcon} alt="" className="drawer-icon" onClick={() => props.expand()}/>
      <a href="/">
        <h1 className="font-display text-white text-4xl">DC-Jam<img src={logoMobile} alt="" className="logo-mobile inline mx-2 pb-1"/>Records</h1>
      </a>
      </header>
    )
}
export default MobileHeader
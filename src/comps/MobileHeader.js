import React from 'react'
import drawerIcon from '../images/drawer.svg'
import logoMobile from '../images/DCJam-megaphone-white.png'
const MobileHeader = (props) => {
    return(
      <header className="flex flex-col z-10 relative pt-5 sm:hidden">
        <div className="flex justify-evenly w-full items-center flex-row">
          <img src={drawerIcon} alt="" className="drawer-icon" onClick={() => props.expand()}/>
          <a href="/">
            <h1 className="font-display text-white text-4xl">DC-Jam<img src={logoMobile} alt="" className="logo-mobile inline mx-2 pb-1"/>Records</h1>
          </a>
        </div>
        <div className="flex pt-3 flex-row justify-center">
          <a href="https://www.facebook.com/people/Darron-Hemann/100071351705122/"><i class="fab mx-2 fa-facebook-f"></i></a>
          <a href="https://twitter.com/dcjamrecords"><i class="fab mx-2 fa-twitter"></i></a>
          <a href="https://soundcloud.com/dc-jam-records"><i class="fab mx-2 fa-soundcloud"></i></a>
          <a href="https://www.instagram.com/DCJamRecords"><i class="fab mx-2 fa-instagram"></i></a>
        </div>
      </header>
    )
}
export default MobileHeader
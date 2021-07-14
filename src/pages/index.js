import * as React from "react"
import drawer from '../images/drawer.svg'
import logoMobile from '../images/DCJam-megaphone-white.png'
const IndexPage = () => {
  return (
    <div className="root min-h-screen bg-background-black">
      <header className="flex justify-around items-center flex-row py-5">
        <img src={drawer} alt="" className="drawer-icon"/>
        <h1 className="font-display text-white text-4xl">DC-Jam<img src={logoMobile} alt="" className="logo-mobile inline mx-2 pb-1"/>Records</h1>
      </header>
    </div>
  )
}

export default IndexPage

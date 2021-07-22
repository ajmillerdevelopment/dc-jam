import React from 'react'
import logoDesk from '../images/dcjam-record.png'
const DesktopHeader = () => {
    return(
      <header className="sm:flex sm:flex-col shadow-lg pb-1 bg-highlight-red hidden">
      <div className="sm:flex justify-around items-center flex-row">
      <a href="/">
        <h1 className="font-display text-white text-7xl txt-shadow">DC-Jam<img src={logoDesk} alt="" className="logo-mobile inline mx-2 pb-1"/>Records</h1>
      </a>
      </div>
      <nav id="drawer" className="sm:flex m-2 hidden justify-center flex-row">
            <a href="/about" className="font-display inline mx-4 text-4xl txt-shadow text-white">About</a>
            <a href="/artists" className="font-display inline mx-4 text-4xl txt-shadow text-white">Artists</a>
            <a href="/catalog" className="font-display inline mx-4 text-4xl txt-shadow text-white">Catalog</a>
        </nav>
      </header>
    )
}
export default DesktopHeader
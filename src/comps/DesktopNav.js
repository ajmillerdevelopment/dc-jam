import * as React from 'react'

const DesktopNav = () => {
    return(
        <nav id="drawer" className="sm:flex m-2 hidden justify-center flex-row">
            <a href="/about" className="font-display inline mx-4 text-4xl txt-shadow text-white">About</a>
            <a href="/artists" className="font-display inline mx-4 text-4xl txt-shadow text-white">Artists</a>
            <a href="/catalog" className="font-display inline mx-4 text-4xl txt-shadow text-white">Catalog</a>
        </nav>
    )
}
export default DesktopNav
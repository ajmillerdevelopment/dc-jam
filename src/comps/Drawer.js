import * as React from 'react'

const Drawer = () => {
    return(
        <nav id="drawer" className="h-screen drop-shadow w-1/2 bg-highlight-red absolute p-2 top-0 -left-full">
            <h2 className="font-display my-1 text-3xl text-white">About</h2>
            <h2 className="font-display my-1 text-3xl text-white">Artists</h2>
            <h2 className="font-display my-1 text-3xl text-white">Catalog</h2>
            <h2 className="font-display my-1 text-3xl text-white">Contact</h2>
            <h3 className="font-body text-white">Social Links etc</h3>
        </nav>
    )
}
export default Drawer
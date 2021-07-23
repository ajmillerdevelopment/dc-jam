import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'
import fishbone from '../images/fishbone.jpg'
import tsol from '../images/tsol.jpg'
import richie from '../images/richie.jpg'
import DesktopHeader from '../comps/DesktopHeader'
const ArtistsPage = () => {
    const [open, setOpen] = React.useState(false)
    const expand = () => {
      const drawer = document.getElementById('drawer')
      drawer.classList.remove('-left-full')
      drawer.classList.add('left-0')
      setOpen(true)
  }
    const collapse = (target) => {
      if (open) {
        const drawer = document.getElementById('drawer')
        if (target === drawer) {return}
        drawer.classList.add('-left-full')
        drawer.classList.remove('left-0')
        setOpen(false)
      }
  }
    return(
        <div className="root sm:blurred-bg min-h-screen bg-background-black" onClick={(e) => collapse(e.target)}>
            <Drawer/>
            <MobileHeader expand={expand}/>
            <DesktopHeader/>
            <h2 className="font-display text-white my-4 text-center txt-shadow text-3xl">Artists</h2>
            <div className="flex flex-col justify-center sm:flex-row sm:flex-wrap">
            <article className="relative shadow-lg sm:m-4 sm:max-w-md" >
              <a href="/fishbone">
              <img src={fishbone} alt="" className="w-full sm:rounded"/>
              <h2 className="font-display absolute bottom-0 z-10 text-center w-full txt-shadow text-3xl text-white">Fishbone</h2>
              </a>
            </article>
            <article className="relative shadow-lg sm:m-4 sm:max-w-md" >
              <img src={tsol} alt="" className="w-full rounded"/>
              <h2 className="font-display absolute bottom-0 z-10 text-center w-full txt-shadow text-3xl text-white">T.S.O.L.</h2>
            </article>
            <article className="relative shadow-lg sm:m-4 sm:max-w-md" >
              <img src={richie} alt="" className="w-full rounded"/>
              <h2 className="font-display absolute bottom-0 z-10 text-center w-full txt-shadow text-3xl text-white">Richie Ramone</h2>
            </article>
            </div>
        </div>
    )
}
export default ArtistsPage
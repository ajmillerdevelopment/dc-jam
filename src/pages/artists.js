import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'
import fishbone from '../images/fishbone.jpg'
import tsol from '../images/tsol.jpg'
import richie from '../images/richie.jpg'
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
        <div className="root min-h-screen bg-background-black" onClick={(e) => collapse(e.target)}>
            <Drawer/>
            <MobileHeader expand={expand}/>
            <h2 className="font-display text-white mb-4 text-center text-3xl">Artists</h2>
            <article className="relative" >
              <img src={fishbone} alt="" className="w-full"/>
              <h2 className="font-display absolute bottom-0 z-10 text-center w-full txt-shadow text-3xl text-white">Fishbone</h2>
            </article>
            <article className="relative" >
              <img src={tsol} alt="" className="w-full"/>
              <h2 className="font-display absolute bottom-0 z-10 text-center w-full txt-shadow text-3xl text-white">T.S.O.L.</h2>
            </article>
            <article className="relative" >
              <img src={richie} alt="" className="w-full"/>
              <h2 className="font-display absolute bottom-0 z-10 text-center w-full txt-shadow text-3xl text-white">Richie Ramone</h2>
            </article>
        </div>
    )
}
export default ArtistsPage
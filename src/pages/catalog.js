import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'
import sovmech from '../images/sovmechlp.webp'
import goals from '../images/goals.webp'
import porcupine from '../images/porcupine.webp'
import DesktopHeader from '../comps/DesktopHeader'
const CatalogPage = () => {
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
            <h2 className="font-display text-white txt-shadow text-center my-4 text-3xl">Catalog</h2>
            <div className="flex flex-col justify-center sm:flex-row sm:flex-wrap">
            <article className="relative shadow-lg sm:m-4 sm:max-w-md" >
            <a href="/sovmech">
              <img src={sovmech} alt="" className="w-full sm:rounded"/>
              <div className="absolute bottom-0 w-full z-10">
                <h2 className="font-display text-center w-full txt-shadow text-2xl text-white">The Soviet Machines (LP)</h2>
                <h3 className="font-display text-center w-full txt-shadow text-xl text-white">The Soviet Machines - 2021</h3>
              </div>
            </a>
            </article>
            <article className="relative shadow-lg sm:m-4 sm:max-w-md" >
              <img src={goals} alt="" className="w-full sm:rounded"/>
              <div className="absolute bottom-0 w-full z-10">
                <h2 className="font-display text-center w-full txt-shadow text-2xl text-white">#Goals</h2>
                <h3 className="font-display text-center w-full txt-shadow text-xl text-white">#Goals - 2017</h3>
              </div>
            </article>
            <article className="relative shadow-lg sm:m-4 sm:max-w-md" >
              <img src={porcupine} alt="" className="w-full sm:rounded"/>
              <div className="absolute bottom-0 w-full z-10">
                <h2 className="font-display text-center w-full txt-shadow text-2xl text-white">What You've Heard Isn't Real (EP)</h2>
                <h3 className="font-display text-center w-full txt-shadow text-xl text-white">Porcupine - 2018</h3>
              </div>
            </article>
            </div>
        </div>
    )
}
export default CatalogPage
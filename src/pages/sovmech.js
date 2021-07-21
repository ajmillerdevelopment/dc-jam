import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'
import sovmechlp from "../images/sovmechlp.webp"

const SovMech = () => {
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
            <h2 className="font-display mx-2 text-white text-center text-2xl">The Soviet Machines (LP)</h2>
            <p className="font-display text-white text-center text-xl">The Soviet Machines</p>
            <img src={sovmechlp} alt="" className="w-full my-4"/>
            <h3 className="font-body text-center m-3 text-white text-xl">Review</h3>

            <div className="flex flex-col items-center">
            <button className="text-white font-display bg-highlight-red w-20 h-10 rounded">Buy Now</button>
            <h3 className="font-body text-center m-3 text-white text-xl">Tracklist</h3>
            <ol className="list-decimal">
              <li className="text-white text-sm font-body">Get Your Kicks</li>
              <li className="text-white text-sm font-body">You Should Kill Me</li>
              <li className="text-white text-sm font-body">Baby, We're Gonna Die</li>
              <li className="text-white text-sm font-body">2 Shots (To The Back of the Head)</li>
              <li className="text-white text-sm font-body">All We Are</li>
              <li className="text-white text-sm font-body">Better Way</li>
              <li className="text-white text-sm font-body">Bittersweet Angel</li>
            </ol>
            </div>
        </div>
    )
}
export default SovMech
import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'
import sovmech from "../images/sovmach.webp"

const Post = () => {
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
            <h2 className="font-display mx-2 mb-4 text-white text-center text-2xl">DC-Jam Signs the Soviet Machines</h2>
            <img src={sovmech} alt="" className="w-full"/>
            <p className="font-body m-6 text-white">DC-Jam Records is proud to announce the signing of Minneapolis based, Soviet Machines. New album drops early 2021. </p>
        </div>
    )
}
export default Post
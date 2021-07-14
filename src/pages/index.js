import * as React from "react"
import drawer from '../images/drawer.svg'
import logoMobile from '../images/DCJam-megaphone-white.png'
import Drawer from '../comps/Drawer'
const IndexPage = () => {
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
  return (
    <div className="root min-h-screen bg-background-black" onClick={(e) => collapse(e.target)}>
      <Drawer/>
      <header className="flex justify-around items-center flex-row py-5">
        <img src={drawer} alt="" className="drawer-icon" onClick={() => expand()}/>
        <h1 className="font-display text-white text-4xl">DC-Jam<img src={logoMobile} alt="" className="logo-mobile inline mx-2 pb-1"/>Records</h1>
      </header>
    </div>
  )
}

export default IndexPage

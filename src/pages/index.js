import * as React from "react"
import drawer from '../images/drawer.svg'
import logoMobile from '../images/DCJam-megaphone-white.png'
import Drawer from '../comps/Drawer'
import sovmech from '../images/sovmach.webp'
import {Carousel} from "react-responsive-carousel"
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import goals from '../images/goals.webp'
import porcupine from '../images/porcupine.webp'
import sovmechlp from '../images/sovmechlp.webp'
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
      <article className="relative" >
        <img src={sovmech} alt="" className="w-full"/>
        <h2 className="font-display absolute bottom-0 z-10 text-center w-full txt-shadow text-4xl text-white">DC-Jam Signs the Soviet Machines</h2>
      </article>
      <Carousel showThumbs={false} showIndicators={false} showStatus={false} interval={10000} infiniteLoop={true} autoPlay={true}>
        <div>
          <img src={sovmechlp} alt="" />
          <p className="legend font-body">Soviet Machines (LP) - 2021</p>
        </div>
        <div>
          <img src={goals} alt="" />
          <p className="legend font-body">#Goals - 2017</p>
        </div>
        <div>
          <img src={porcupine} alt="" />
          <p className="legend font-body">What You've Heard Isn't Real (EP) - Porcupine 2018</p>
        </div>
      </Carousel>
      <footer>
        <h3 className="font-body my-4 text-white text-center">Social Links Etc</h3>
        <h4 className="font-body my-4 text-white text-center">©2021 DC-Jam Records. All Rights Reserved. </h4>
      </footer>
    </div>
  )
}

export default IndexPage

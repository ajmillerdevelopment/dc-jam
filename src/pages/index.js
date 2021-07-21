import * as React from "react"
import Drawer from '../comps/Drawer'
import sovmech from '../images/sovmach.webp'
import {Carousel} from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import goals from '../images/goals.webp'
import porcupine from '../images/porcupine.webp'
import sovmechlp from '../images/sovmechlp.webp'
import MobileHeader from '../comps/MobileHeader'
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
    <div id='root' className="root absolute w-screen min-h-screen sm:bg-street bg-background-black" onClick={(e) => collapse(e.target)}>
      <Drawer/>
      <MobileHeader expand={expand}/>
      <div className="sm:cover-image hidden"></div>
      {/* <article className="relative" >
        <a href="/post">
        <img src={sovmech} alt="" className="w-full"/>
        <h2 className="font-display absolute bottom-0 z-10 text-center w-full txt-shadow text-3xl text-white">DC-Jam Signs the Soviet Machines</h2>
        </a>
      </article>
      <Carousel showThumbs={false} swipeable={false} showIndicators={false} showStatus={false} interval={10000} infiniteLoop={true} autoPlay={true}>
        <div>
          <a href="/sovmech">
            <img src={sovmechlp} alt="" />
            <p className="legend font-body">Soviet Machines (LP) - 2021</p>            
          </a>
        </div>
        <div>
          <img src={goals} alt="" />
          <p className="legend font-body">#Goals - 2017</p>
        </div>
        <div>
          <img src={porcupine} alt="" />
          <p className="legend font-body">What You've Heard Isn't Real (EP) - Porcupine 2018</p>
        </div>
      </Carousel> */}
      <footer>
        <h3 className="font-body my-4 text-white text-center">Social Links Etc</h3>
        <h4 className="font-body my-4 text-white text-center">©2021 DC-Jam Records. All Rights Reserved. </h4>
      </footer>
    </div>
  )
}

export default IndexPage

import * as React from "react"
import Drawer from '../comps/Drawer'
import sovmech from '../images/sovmach.webp'
import {Carousel} from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import goals from '../images/goals.webp'
import porcupine from '../images/porcupine.webp'
import sovmechlp from '../images/sovmechlp.webp'
import MobileHeader from '../comps/MobileHeader'
import DesktopHeader from '../comps/DesktopHeader'
import Spacer from '../comps/Spacer'
const IndexPage = () => {
  const [open, setOpen] = React.useState(false)
  // const [scrolled, setScrolled] = React.useState(false)
  let scrolled = false
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
  const scrollLock = () => {
    if (window.scrollY > window.innerHeight && !scrolled) {
      document.getElementById('spacer').classList.remove('sm:block')
      scrolled = true
      window.scrollTo(0,0)
      window.removeEventListener('scroll', scrollLock)
    }
  }
  //Avoids build error with Gatsby
  const isBrowser = typeof window !== "undefined"
  if (isBrowser) {
    const scrollParam = window.location.search.slice(1).split("&")[0].split("=")[1]
    window.addEventListener('scroll', scrollLock)
  }
  if (scrollParam === "true"){
    scrolled = true
  }
  console.log(`Scrolled: ${scrolled}`)
  return (
    <div id='root' className="root sm:parallax bg-background-black absolute w-screen min-h-screen" onClick={(e) => collapse(e.target)}>
      <Drawer/>
      <MobileHeader expand={expand} />
      <Spacer scroll={scrolled}/>
      <div className="backdrop-filter backdrop-blur min-h-screen pb-10">
      <DesktopHeader/>
      <div className="flex flex-col justify-center items-center">
      <h2 className="font-display text-center txt-shadow text-4xl hidden sm:block mt-4 text-white">News</h2>
      <article className="relative shadow-lg sm:m-4 sm:max-w-md" >
        <a href="/post">
        <img src={sovmech} alt="" className="w-full sm:rounded"/>
        <h3 className="font-display absolute top-2 z-10 text-center w-full txt-shadow text-3xl text-white">DC-Jam Signs the Soviet Machines</h3>
        </a>
      </article>
        <div className="sm:flex sm:flex-col sm:items-center">
          <h2 className="font-display text-3xl text-white hidden txt-shadow sm:block">Latest Releases</h2>
          <Carousel className="sm:max-w-md sm:m-4 shadow-lg" showThumbs={false} swipeable={false} showIndicators={false} showStatus={false} interval={10000} infiniteLoop={true} autoPlay={true}>
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
          </Carousel>
        </div>
      </div>
      <footer>
        <h3 className="font-body my-4 text-white sm:text-black text-center">Social Links Etc</h3>
        <h4 className="font-body my-4 text-white sm:text-black text-center">©2021 DC-Jam Records. All Rights Reserved. </h4>
        <p className="font-body my-4 text-xs hidden sm:block sm:text-black text-center">Thanks to White.Rainforest ∙ 易雨白林. @whiterainforest for making this photo available freely on Unsplash</p>
      </footer>
      </div>
    </div>
  )
}
export default IndexPage

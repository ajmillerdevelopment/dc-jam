import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'
import DesktopHeader from '../comps/DesktopHeader'
import Meta from '../comps/Meta'
const AboutPage = () => {
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
        <div className="root sm:blurred-bg min-h-screen w-screen flex flex-col items-center bg-background-black" onClick={(e) => collapse(e.target)}>
            <Meta/>
            <Drawer/>
            <MobileHeader expand={expand}/>
            <DesktopHeader/>
            <h2 className="font-display m-4 text-white text-center txt-shadow text-3xl">About</h2>
            <div className="flex flex-col sm:my-container items-center">
            <p className="font-body m-6 max-w-prose text-white">DC-Jam Records is an American independent record label founded in 2006 by President Darron Hemann, that focuses primarily on the genres of Punk, Ska, and Experimental music.</p>
            <p className="font-body m-6 max-w-prose text-white">With an enduring commitment to the DIY ethos, DC-Jam caters to the new “independent” minded landscape of the music business, and its changing climate. The DCJamRecords.com site has become a hub for the label’s online community, directing fans to sites like YouTube, Tumblr and Facebook, where their bands have an active presence. The label continues to grow through a traditional and nontraditional record retail presence that spans the world.</p>
            <p className="font-body m-6 max-w-prose text-white">DC-Jam Records 1722 S. Glenstone Ave. Suite HH #400 Springfield, MO 65804. <br/> <a href="mailto:Submissions@DCJamRecords.com" className="underline text-highlight-red">Submissions@DCJamRecords.com</a> </p>
            </div>
        </div>
    )
}
export default AboutPage
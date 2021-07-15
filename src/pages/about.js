import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'

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
        <div className="root min-h-screen bg-background-black" onClick={(e) => collapse(e.target)}>
            <Drawer/>
            <MobileHeader expand={expand}/>
            <h2 className="font-display text-white text-center text-3xl">About</h2>
            <p className="font-body m-6 text-white">DC-Jam Records is an American independent record label founded in 2006 by President Darron Hemann, that focuses primarily on the genres of Punk, Ska, and Experimental music. The roster features well-known classic punk rock artists such as: The Adicts, Fishbone, Richie Ramone, T.S.O.L., JFA and Down By Law, as well as several twenty-first century up and comers.</p>
            <p className="font-body m-6 text-white">With an enduring commitment to the DIY ethos, DC-Jam caters to the new “independent” minded landscape of the music business, and its changing climate. The DCJamRecords.com site has become a hub for the label’s online community, directing fans to sites like YouTube, Tumblr and Facebook, where their bands have an active presence. The label continues to grow through a traditional and nontraditional record retail presence that spans the world.</p>
            <p className="font-body m-6 text-white">DC-Jam Records 1722 S. Glenstone Ave. Suite HH #400 Springfield, MO 65804. <br/> <a href="mailto:" className="underline text-highlight-red">Submissions@DCJamRecords.com</a> </p>
            {/* <h3 className="font-display text-white text-center text-2xl">Contact Us!</h3>
            <form action="mailto:ajm9594@gmail.com" method="POST" encType="text/plain">
              <p className="text-white">Name:</p>
              <input type="text" name="name" />
              <p className="text-white">E-mail:</p>
              <input type="email" name="mail" />
              <p className="text-white">Phone Number</p>
              <input type="text" name="number" />
              <p className="text-white">Website</p>
              <input type="text" name="website" />
              <p className="text-white">Message</p>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
              <input type="submit" value="Send" />
            </form> */}
        </div>
    )
}
export default AboutPage
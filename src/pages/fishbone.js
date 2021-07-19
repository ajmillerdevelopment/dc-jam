import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'
import fishbone from "../images/fishbone.jpg"
import {Carousel} from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import live from '../images/live-bordeaux.webp'
import stoopid from '../images/stoopid.webp'
import glue from '../images/glue.webp'
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
            <h2 className="font-display mx-2 mb-4 text-white text-center text-3xl">Fishbone</h2>
            <img src={fishbone} alt="" className="w-full"/>
            <p className="font-body m-6 text-white">Celebrating 25 groundbreaking years, FISHBONE has been trailblazing their way through the history of American Ska, Funk, Punk, Rock Fusion and (so-called) Black Rock since starting their professional career in Los Angeles’ burgeoning, Alternative Rock music scene of the mid-1980s.</p>
            <p className="font-body m-6 text-white">Their sound has often been imitated, but never duplicated. They have toured worldwide with such bands as the Beastie Boys, Red Hot Chili Peppers, The Roots, Les Claypool/ Primus, Fela Kuti, George Clinton, The Dead Kennedys and many more. Angelo Moore’s ability to combine thought-provoking, humorous social commentary with FISHBONE’s frenzied, up-tempo music and frantic, euphorically entertaining stage show has cultivated their undisputed reputation as one of the best live acts in music history.</p>
            <p className="font-body m-6 text-white">Now in their 25th year of composing, creating, recording, releasing and performing original music together, mass critical appeal appears to be returning to the band, fueled by their critically acclaimed full-length feature documentary; Everyday Sunshine: The Story of Fishbone. Narrated by Laurence Fishburne, the ﬁlm earned LA Weekly’s Critic’s Choice Award at the Los Angeles Film Fest in 2010, has been nominated for a 2013 Northern California Emmy® Award. Called “effortlessly Entertaining” (Variety), “Brilliant and Groundbreaking” (Pop Matters), and hailed as “more than a documentary about rock ‘n’ roll. It’s a documentary about the American spirit and one that shows the life of one of its most inﬂuential creative forces.” (Encore Magazine)</p>
            <p className="font-body m-6 text-white">To date, FISHBONE still continues to tour all over the world, turning heads at some of the most noteworthy festivals around the globe such as Gathering of the Vibes in Bridgeport, CT (2013), Outside Lands Music Festival in San Francisco, CA (2013), Ottawa Blues Fest (2012), Montreal Jazz Festival (2012), DeLuna Fest in Pensacola, FL (2012), Bumbershoot in Seattle, WA (2012), Riot Fest in Chicago, IL (2012), Voodoo Festival in New Orleans, LA (2011), Fuji Rock Festival in Tokyo, Japan (2010), Wakarusa in Ozark, AK (2010), Sunset Junction in Los Angeles, CA (2010) and more. This year, the band had the opportunity to perform on Jimmy Kimmel Live! and Angelo Moore sat in with The Roots on Late Night with Jimmy Fallon.</p>
            <p className="font-body m-6 text-white">The band released a single “Whipper Snapper” in March 2013, on a 7-inch split record with Slightly Stoopid. Their latest Crazy Glue (DC-Jam Records) released October 11, 2011 and is currently available online everywhere and select retail stores nationwide. The current member line up includes original members Angelo Moore aka Dr. Madd Vibe (vocals/sax/theramin), Norwood Fisher (bass/vocals), Dirty Walt (trumpet, vocals), as well as Rocky George (guitar), Paul Hampton (keyboards/vocals), John Steward (drums), and Jay Armant (trombone, vocals).</p>
            <p className="font-display m-6  text-xl text-white text-center">Appears On:</p>
            <Carousel showThumbs={false} swipeable={false} showIndicators={false} showStatus={false} interval={10000} infiniteLoop={true} autoPlay={true}>
                <div>
                <a href="/sovmech">
                    <img src={live} alt="" />
                    <p className="legend font-body">Live in Bourdeaux - 2010</p>            
                </a>
                </div>
                <div>
                <img src={stoopid} alt="" />
                <p className="legend font-body">Whipper Snapper - 2013</p>
                </div>
                <div>
                <img src={glue} alt="" />
                <p className="legend font-body">Crazy Glue - 2011</p>
                </div>
            </Carousel>
        </div>
    )
}
export default Post
import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'
import DesktopHeader from '../comps/DesktopHeader'
import Meta from '../comps/Meta'
const Release = ({pageContext}) => {
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
  const createMarkup = () => {
    return  {__html: pageContext.content}
  }
  console.log(pageContext.fields)
  const icons = []
  if (pageContext.fields.website) {
      icons.push(<a href={pageContext.fields.website}><i className="fas fab mx-2 fa-globe"></i></a>)
  }
  if (pageContext.fields.facebook) {
    icons.push(<a href={pageContext.fields.facebook}><i className="fab mx-2 fa-facebook-f"></i></a>)
}
if (pageContext.fields.instagram) {
    icons.push(<a href={pageContext.fields.instagram}><i className="fab mx-2 fa-instagram"></i></a>)
}
if (pageContext.fields.lastfm) {
    icons.push(<a href={pageContext.fields.lastfm}><i className="fab mx-2 fa-lastfm-square"></i></a>)
}
if (pageContext.fields.myspace) {
    icons.push(<a href={pageContext.fields.myspace}><i className="fas fab mx-2 fa-globe"></i></a>)
}
if (pageContext.fields.soundcloud) {
    icons.push(<a href={pageContext.fields.soundcloud}><i className="fab mx-2 fa-soundcloud"></i></a>)
}
if (pageContext.fields.spotify) {
    icons.push(<a href={pageContext.fields.spotify}><i className="fab mx-2 fa-spotify"></i></a>)
}
if (pageContext.fields.twitter) {
    icons.push(<a href={pageContext.fields.twitter}><i className="fab mx-2 fa-twitter"></i></a>)
}
  if (pageContext.image) {
    return(
      <div className="root sm:blurred-bg min-h-screen w-screen flex flex-col items-center bg-background-black" onClick={(e) => collapse(e.target)}>
      <Meta/>
      <Drawer/>
      <MobileHeader expand={expand}/>
      <DesktopHeader/>
      <h3 className="font-display mt-4 text-white text-center txt-shadow text-3xl">{pageContext.title}</h3>
      <div>{icons}</div>
      <img src={pageContext.image} alt={pageContext.alt} className="w-full sm:max-w-md m-4 rounded shadow-lg"/>
      <div dangerouslySetInnerHTML={createMarkup()} className="flex wp-content mb-4 flex-col sm:w-4/6 sm:my-container items-center"></div>
  </div>

    )
  } else {
    return(
      <div className="root sm:blurred-bg min-h-screen w-screen flex flex-col items-center bg-background-black" onClick={(e) => collapse(e.target)}>
      <Drawer/>
      <MobileHeader expand={expand}/>
      <DesktopHeader/>
      <h3 className="font-display m-4 text-white text-center txt-shadow text-3xl">{pageContext.title}</h3>
      <div dangerouslySetInnerHTML={createMarkup()} className="flex wp-content mb-4 flex-col sm:w-4/6 sm:my-container items-center"></div>
  </div>
    )
  }
}
export default Release
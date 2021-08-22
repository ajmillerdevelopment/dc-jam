import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'
import DesktopHeader from '../comps/DesktopHeader'
import Meta from '../comps/Meta'
const Post = ({pageContext}) => {
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
  console.log(pageContext)
  if (pageContext.image) {
    return(
      <div className="root sm:blurred-bg min-h-screen w-screen flex flex-col items-center bg-background-black" onClick={(e) => collapse(e.target)}>
      <Meta/>
      <Drawer/>
      <MobileHeader expand={expand}/>
      <DesktopHeader/>
      <h3 className="font-display m-4 text-white text-center txt-shadow text-3xl">{pageContext.title}</h3>
      <img src={pageContext.image} alt={pageContext.alt} className="sm:max-w-2xl m-4 rounded shadow-lg"/>
      <div dangerouslySetInnerHTML={createMarkup()} className="flex wp-content flex-col sm:w-4/6 sm:my-container items-center mb-4"></div>
  </div>

    )
  } else {
    return(
      <div className="root sm:blurred-bg min-h-screen w-screen flex flex-col items-center bg-background-black" onClick={(e) => collapse(e.target)}>
      <Drawer/>
      <MobileHeader expand={expand}/>
      <DesktopHeader/>
      <h3 className="font-display m-4 text-white text-center txt-shadow text-3xl">{pageContext.title}</h3>
      <div dangerouslySetInnerHTML={createMarkup()} className="flex wp-content flex-col sm:w-4/6 sm:my-container items-center mb-4"></div>
  </div>
    )
  }
}
export default Post
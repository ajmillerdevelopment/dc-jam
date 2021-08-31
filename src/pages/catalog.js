import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'
import DesktopHeader from '../comps/DesktopHeader'
import {graphql} from 'gatsby'
import Release from '../comps/Release'
import Meta from '../comps/Meta'
const CatalogPage = ({data}) => {
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
  const releaseData = data.allWpRelease.nodes
  const releases = releaseData.map((node) => {
    return(<Release key={node.databaseId} slug={node.slug} title={node.title} image={node.featuredImage.node.sourceUrl} alt={node.featuredImage.node.altText} />)
  })
  console.log(releaseData)
    return(
        <div className="root sm:blurred-bg min-h-screen bg-background-black" onClick={(e) => collapse(e.target)}>
            <Meta/>
            <Drawer/>
            <MobileHeader expand={expand}/>
            <DesktopHeader/>
            <h2 className="font-display text-white txt-shadow text-center my-4 text-3xl">Catalog</h2>
            <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap">
              {releases}
            </div>
        </div>
    )
}
export default CatalogPage
export const query = graphql`
query releasesQuery {
  allWpRelease(sort: {fields: date, order: DESC}) {
    nodes {
      title
      slug
      databaseId
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}
`
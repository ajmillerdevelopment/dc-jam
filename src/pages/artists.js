import * as React from 'react'
import Drawer from '../comps/Drawer'
import MobileHeader from '../comps/MobileHeader'
import DesktopHeader from '../comps/DesktopHeader'
import {graphql} from 'gatsby'
import Artist from '../comps/Artist'
import Meta from '../comps/Meta'
const ArtistsPage = ({data}) => {
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
  const artistData = data.allWpArtist.nodes
  const artists = artistData.map((node) => {
    return(<Artist key={node.databaseId} slug={node.slug} title={node.title} image={node.featuredImage.node.sourceUrl} alt={node.featuredImage.node.altText} />)
  })
  console.log(artistData)
    return(
        <div className="root sm:blurred-bg min-h-screen bg-background-black" onClick={(e) => collapse(e.target)}>
            <Meta/>
            <Drawer/>
            <MobileHeader expand={expand}/>
            <DesktopHeader/>
            <h2 className="font-display text-white my-4 text-center txt-shadow text-3xl">Artists</h2>
            <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap">
              {artists}
            </div>
        </div>
    )
}
export default ArtistsPage
export const query = graphql`
query artistsQuery {
  allWpArtist(sort: {fields: date, order: DESC}) {
    nodes {
      title
      slug
      databaseId
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }
}
`
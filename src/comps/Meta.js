import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon.ico'
const Meta = (scroll) => {
    return(
        <Helmet htmlAttributes={{lang: 'en'}}>
            <title>DC-Jam Records</title>
            <meta name="description" content="DC-Jam Records is an American independent record label founded in 2006 by President Darron Hemann, that focuses primarily on the genres of Punk, Ska, and Experimental music." />
            <link rel="icon" href={favicon} />
            <script src="https://kit.fontawesome.com/03085ecba9.js" crossorigin="anonymous"></script>
        </Helmet>
    )
}
export default Meta
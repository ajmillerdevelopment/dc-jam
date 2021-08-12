import React from 'react'
import { Helmet } from 'react-helmet'
const Meta = (scroll) => {
    return(
        <Helmet htmlAttributes={{lang: 'en'}}>
            <title>DC-Jam Records</title>
            <meta name="description" content="DC-Jam Records is an American independent record label founded in 2006 by President Darron Hemann, that focuses primarily on the genres of Punk, Ska, and Experimental music." />
        </Helmet>
    )
}
export default Meta
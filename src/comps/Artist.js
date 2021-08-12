import React from 'react'
const Artist = (props) => {
    return(
        <article className="relative sm:bg-background-black rounded shadow-lg sm:m-4 sm:max-w-md" >
        <a href={props.slug}>
        <img src={props.image} alt={props.alt} className="w-full sm:rounded"/>
        <h2 className="font-display absolute bottom-0 z-10 text-center w-full txt-shadow text-3xl text-white">{props.title}</h2>
        </a>
      </article>
    )
}
export default Artist
import React from 'react'
const Article = (props) => {
    if (props.containsImage) {
        return(
            <article className="flex flex-col items-center m-4 sm:p-5 rounded sm:my-container shadow-lg sm:m-4 sm:w-2/6"> 
            <a href={props.slug}>
            <h3 className="font-display mb-1 top-2 z-10 text-center w-full txt-shadow text-3xl text-white">{props.title}</h3>
            </a>
            <img src={props.image} alt={props.altText} className="max-h-custom sm:rounded"/>
            <div dangerouslySetInnerHTML={{__html: props.content}} className="wp-content my-2 h-full"/>
            </article>
        )
    } else {
           return(
        <article className="flex flex-col items-center m-4"> 
        <div className="relative h-full sm:p-4 sm:py-10 rounded sm:my-container shadow-lg sm:m-4 sm:w-md" >
        <a href={props.slug}>
        <h3 className="font-display top-2 z-10 text-center w-full txt-shadow text-3xl text-white">{props.title}</h3>
        </a>
        </div>
        <div dangerouslySetInnerHTML={{__html: props.content}} className="sm:my-container my-2 wp-content h-full shadow-lg"/>
        </article>

    ) 
    }
} 
export default Article
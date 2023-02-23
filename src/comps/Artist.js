import React from "react";
const Artist = (props) => {
    return (
        <article className="relative tile sm:m-4 rounded shadow-lg">
            <a href={`/${props.slug}`}>
                <img src={props.image} alt={props.alt} className="sm:rounded" />
                <h2 className="font-display absolute bottom-0 z-10 text-center w-full txt-shadow text-3xl text-white">
                    {props.title}
                </h2>
            </a>
        </article>
    );
};
export default Artist;

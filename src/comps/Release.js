import React from "react";
const Release = (props) => {
    return (
        <article className="relative tile-small rounded sm:m-4">
            <a href={`/${props.slug}`}>
                <img
                    src={props.image}
                    alt={props.alt}
                    className="shadow-lg sm:rounded"
                />
                {/* <div className="absolute bottom-0 w-full z-10">
        <h2 className="font-display text-center w-full txt-shadow text-2xl text-white">{props.title}</h2>
      </div> */}
            </a>
        </article>
    );
};
export default Release;

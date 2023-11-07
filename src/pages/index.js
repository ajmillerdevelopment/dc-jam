import * as React from "react";
import Drawer from "../comps/Drawer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MobileHeader from "../comps/MobileHeader";
import DesktopHeader from "../comps/DesktopHeader";
import Spacer from "../comps/Spacer";
import { graphql } from "gatsby";
import Article from "../comps/Article";
import Meta from "../comps/Meta";
const IndexPage = ({ data }) => {
    const [open, setOpen] = React.useState(false);
    // const [scrolled, setScrolled] = React.useState(false)
    let scrolled = false;
    const expand = () => {
        const drawer = document.getElementById("drawer");
        drawer.classList.remove("-left-full");
        drawer.classList.add("left-0");
        setOpen(true);
    };
    const collapse = (target) => {
        if (open) {
            const drawer = document.getElementById("drawer");
            if (target === drawer) {
                return;
            }
            drawer.classList.add("-left-full");
            drawer.classList.remove("left-0");
            setOpen(false);
        }
    };
    const scrollLock = () => {
        if (window.scrollY > window.innerHeight && !scrolled) {
            document.getElementById("spacer")?.classList.remove("sm:block");
            scrolled = true;
            window.scrollTo(0, 0);
            window.removeEventListener("scroll", scrollLock);
        }
    };
    //Avoids build error with Gatsby
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
        const scrollParam = window.location.search
            .slice(1)
            .split("&")[0]
            .split("=")[1];
        window.addEventListener("scroll", scrollLock);
        if (scrollParam === "true") {
            scrolled = true;
        }
    }
    const articleData = data.allWpPost.nodes;
    const articles = articleData.map((elem) => {
        if (elem.featuredImage) {
            return (
                <Article
                    containsImage={true}
                    content={elem.content}
                    key={elem.databaseId}
                    slug={elem.slug}
                    image={elem.featuredImage.node.sourceUrl}
                    altText={elem.featuredImage.node.altText}
                    title={elem.title}
                />
            );
        } else {
            return (
                <Article
                    containsImage={false}
                    content={elem.content}
                    key={elem.databaseId}
                    slug={elem.slug}
                    title={elem.title}
                />
            );
        }
    });
    const latestReleaseData = data.allWpRelease.nodes;
    const releaseSlides = latestReleaseData.map((elem) => {
        return (
            <div key={elem.databaseId}>
                <a href={elem.slug}>
                    <img
                        src={elem.featuredImage.node.sourceUrl}
                        alt={elem.featuredImage.node.altText}
                    />
                    <p className="legend font-body">{elem.title}</p>
                </a>
            </div>
        );
    });
    return (
        <div
            id="root"
            className="root sm:parallax bg-background-black absolute w-screen min-h-screen"
            onClick={(e) => collapse(e.target)}
        >
            <Meta />
            <Drawer />
            <MobileHeader expand={expand} />
            <Spacer scroll={scrolled} />
            <div className="backdrop-filter backdrop-blur min-h-screen pb-10">
                <DesktopHeader />
                <div className="flex sm:hidden pt-3 flex-row justify-center">
                    <a href="https://www.facebook.com/people/Darron-Hemann/100071351705122/">
                        <i className="fab mx-2 fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/dcjamrecords">
                        <i className="fab mx-2 fa-twitter"></i>
                    </a>
                    <a href="https://soundcloud.com/dc-jam-records">
                        <i className="fab mx-2 fa-soundcloud"></i>
                    </a>
                    <a href="https://www.instagram.com/DCJamRecords">
                        <i className="fab mx-2 fa-instagram"></i>
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="font-display text-center txt-shadow text-6xl hidden sm:block mt-4 text-white">
                        News
                    </h2>

                    {/* Manually placed video article */}
                    <article className="flex flex-col items-center m-4 w-full sm:p-5 sm:m-4 sm:w-5/6">
                        <h3 className="font-display mb-2 top-2 z-10 text-center w-full txt-shadow text-3xl text-white">
                            The Way Down by Porcupine
                        </h3>
                        <div className="wp-content sm:my-container w-full flex flex-col items-center my-2 sm:w-4/6 h-full">
                            <p className="w-full">
                                Brand new single and video entitled ‘The Way
                                Down’ by Porcupine. New album and tour dates to
                                follow soon.
                            </p>
                            <iframe
                                width="360"
                                height="180"
                                src="https://www.youtube.com/embed/N_BNAqR33Xc"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className="sm:hidden"
                            ></iframe>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/N_BNAqR33Xc"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className="hidden sm:block"
                            ></iframe>
                        </div>
                    </article>

                    {articles}
                    <div className="sm:flex sm:flex-col sm:items-center">
                        <h2 className="font-display text-3xl text-white hidden txt-shadow sm:block">
                            Latest Releases
                        </h2>
                        <Carousel
                            className="sm:max-w-md sm:m-4 shadow-lg"
                            showThumbs={false}
                            swipeable={false}
                            showIndicators={false}
                            showStatus={false}
                            interval={10000}
                            infiniteLoop={true}
                            autoPlay={true}
                        >
                            {releaseSlides}
                        </Carousel>
                    </div>
                </div>
                <footer>
                    <h4 className="font-body my-4 text-white sm:text-black text-center">
                        ©2021 DC-Jam Records. All Rights Reserved.{" "}
                    </h4>
                    <p className="font-body my-4 text-xs hidden sm:block sm:text-black text-center">
                        Thanks to White.Rainforest ∙ 易雨白林. @whiterainforest
                        for making this photo available freely on Unsplash
                    </p>
                </footer>
            </div>
        </div>
    );
};
export default IndexPage;
export const query = graphql`
    query indexQuery {
        allWpPost(sort: { fields: modified, order: DESC }) {
            nodes {
                title
                featuredImage {
                    node {
                        sourceUrl
                        altText
                    }
                }
                content
                slug
            }
        }
        allWpRelease(sort: { fields: date, order: DESC }, limit: 3) {
            nodes {
                title
                slug
                featuredImage {
                    node {
                        sourceUrl
                        altText
                    }
                }
            }
        }
    }
`;

import React from "react";
import logoDesk from "../images/dcjam-record.png";
const DesktopHeader = () => {
    return (
        <header className="sm:flex sm:flex-col w-screen shadow-lg pb-2 bg-highlight-red hidden">
            <div className="sm:flex justify-around items-center flex-row">
                <a href="/?scrolled=true">
                    <h1 className="font-display text-white text-7xl txt-shadow">
                        DC-Jam
                        <img
                            src={logoDesk}
                            alt=""
                            className="logo-mobile inline mx-2 pb-1"
                        />
                        Records
                    </h1>
                </a>
            </div>
            <nav className="sm:flex m-2 hidden justify-center items-center flex-row">
                <a
                    href="/about"
                    className="font-display inline mx-4 text-4xl txt-shadow text-white"
                >
                    About
                </a>
                <a
                    href="/artists"
                    className="font-display inline mx-4 text-4xl txt-shadow text-white"
                >
                    Artists
                </a>
                <a
                    href="/catalog"
                    className="font-display inline mx-4 text-4xl txt-shadow text-white"
                >
                    Catalog
                </a>
                <a
                    href="https://dcjamrecordscatalog.bigcartel.com/"
                    className="font-display inline mx-4 text-4xl txt-shadow text-white"
                >
                    Shop
                </a>
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
            </nav>
        </header>
    );
};
export default DesktopHeader;

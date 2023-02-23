import React from "react";
import drawerIcon from "../images/drawer.svg";
import logoMobile from "../images/DCJam-megaphone-white.png";
const MobileHeader = (props) => {
    return (
        <header className="flex w-full flex-col z-10 relative pt-5 sm:hidden">
            <div className="flex justify-evenly w-full mx-2 items-center flex-row">
                <img
                    src={drawerIcon}
                    alt=""
                    className="drawer-icon"
                    onClick={() => props.expand()}
                />
                <a href="/">
                    <h1 className="font-display text-center text-white text-4xl">
                        DC-Jam
                        <img
                            src={logoMobile}
                            alt=""
                            className="logo-mobile inline mx-2 pb-1"
                        />
                        Records
                    </h1>
                </a>
            </div>
        </header>
    );
};
export default MobileHeader;

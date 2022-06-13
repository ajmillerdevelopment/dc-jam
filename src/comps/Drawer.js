import * as React from "react";

const Drawer = () => {
    return (
        <nav
            id="drawer"
            className="z-20 h-full sm:hidden fixed drop-shadow w-1/2 bg-highlight-red p-2 top-0 -left-full"
        >
            <a
                href="/about"
                className="font-display block my-1 text-3xl text-white"
            >
                About
            </a>
            <a
                href="/artists"
                className="font-display block my-1 text-3xl text-white"
            >
                Artists
            </a>
            <a
                href="/catalog"
                className="font-display block my-1 text-3xl text-white"
            >
                Catalog
            </a>
            <a
                href="https://dcjamrecordscatalog.bigcartel.com/"
                className="font-display block my-1 text-3xl text-white"
            >
                Shop
            </a>
            <h3 className="font-body text-white">Social Links etc</h3>
        </nav>
    );
};
export default Drawer;

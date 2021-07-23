import React from 'react'
const Spacer = (scroll) => {
    if (scroll.scroll) {
        return(
        <div id="spacer"></div>
        )
    }
    else {
        return (
            <div id="spacer" className="h-screen hidden sm:block"></div>
        )
    }
}
export default Spacer
import React from "react";
import ShortsCard from "../Cards/ShortsCard";

function Shorts(){
    return(
        <>
            <div className={'grid grid-cols-3 text-white'}>
                <div className={'col-span-1'}></div>
                <div className={'col-span-2'}>
                    <ShortsCard title={'Mr Beast Reacts'} image={'https://i.ytimg.com/vi/dfJaOg3jo1M/maxresdefault.jpg'} creator={'Mr Beast'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'}/>
                </div>
            </div>
        </>
    )
}

export default Shorts;
import React from "react";
import PreviewCard from "../Cards/PreviewCard";
import {Link} from "react-router-dom";

function Watch(){
    return(
        <>
            <div className={'grid grid-cols-4'}>
                <div className={'col-span-3'}>
                    <img src="https://i.ytimg.com/vi/0e3GPea1Tyg/maxresdefault.jpg" alt="Pic"/>
                    <p className={'text-2xl py-2'}>Mr Beast Monkey Video</p>
                    <div className={'flex py-2'}>
                        <div className={'flex flex-col'}><p className={'text-lg'}>Mr Beast</p><p className={'font-thin'}>100 Million subscribers</p></div>
                        <div className={'bg-white rounded-full text-black px-2 py-4 mx-4'}><button>Subscribe</button></div>
                    </div>
                    <div className={'bg-stone-700 rounded-md'}>
                        <div className={'flex flex-col p-2'}>
                            <p className={'py-1'}> 5 Million Views    2 Days Ago</p>
                            <p className={'py-1'}> Mr Beast makes monkeys</p>
                            <p className={'py-1'}> Show More</p>
                        </div>
                    </div>
                    <div>
                        <p className={'text-xl font-thin py-6 px-4'}>2,000 Comments</p>
                    </div>
                </div>
                <div className={'col-span-1'}>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                </div>
            </div>
        </>
    )
}

export default Watch;
import React from "react";
import PreviewCard from "../Cards/PreviewCard";
import {Link} from "react-router-dom";
import CommentCard from "../Cards/CommentCard";

function Watch(){
    return(
        <>
            <div className={'grid grid-cols-6'}>
                <div className={'col-span-4 pl-4'}>
                    <img src="https://i.ytimg.com/vi/0e3GPea1Tyg/maxresdefault.jpg" alt="Pic"/>
                    <p className={'text-2xl py-2'}>Mr Beast Monkey Video</p>
                    <div className={'flex py-2'}>
                        <img alt={'profile'} className={'w-[70px] h-[50px]'} src={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'}/>
                        <div className={'flex flex-col'}><Link to={'/profile'}><p className={'text-lg'}>Mr Beast</p></Link><p className={'font-thin'}>100 Million subscribers</p></div>
                        <div className={'bg-white rounded-full text-black px-2 mx-4 h-[50px] pt-3'}><button>Subscribe</button></div>
                    </div>
                    <div className={'bg-stone-700 rounded-md'}>
                        <div className={'flex flex-col p-2'}>
                            <p className={'py-1'}> 5 Million Views    2 Days Ago</p>
                            <p className={'py-1'}> Mr Beast makes monkeys</p>
                            <p className={'py-1'}> Show More</p>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <p className={'text-xl font-thin py-6 px-4'}>2,000 Comments</p>
                        <p className={'text-xl py-6 px-4'}>Sort by</p>
                    </div>
                    <div className={'flex pb-2'}>
                        <img alt={'profile'} className={'w-[60px] h-[60px] rounded-full'} src={'https://www.famousbirthdays.com/faces/mr-beast-image.jpg'}/>
                        <form className={'px-2'}>
                            <input className={' bg-black rounded-md w-[500px] h-[60px] px-2'} placeholder={'Add a public comment...'}></input>
                        </form>
                    </div>
                    <hr className={'pb-3'}/>
                    <div className={'flex flex-col'}>
                        <CommentCard name={'BeastFan123'} time={'1 second ago'} comment={'Wonderful video'} image={'https://www.thefamouspeople.com/profiles/images/mr-beast-1.jpg'}/>
                        <CommentCard name={'BeastFan123'} time={'1 second ago'} comment={'Wonderful video'} image={'https://www.thefamouspeople.com/profiles/images/mr-beast-1.jpg'}/>
                        <CommentCard name={'BeastFan123'} time={'1 second ago'} comment={'Wonderful video'} image={'https://www.thefamouspeople.com/profiles/images/mr-beast-1.jpg'}/>
                    </div>
                </div>
                <div className={'col-span-2 pl-4'}>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/U30d6mG_jaI/maxresdefault.jpg'} title={'Get More Views in Just 100 Days'} creator={'Top Viewer'} views={'10 Million'} time={'10 Days'}/></Link>
                <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/U30d6mG_jaI/maxresdefault.jpg'} title={'Get More Views in Just 100 Days'} creator={'Top Viewer'} views={'10 Million'} time={'10 Days'}/></Link>
                <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/U30d6mG_jaI/maxresdefault.jpg'} title={'Get More Views in Just 100 Days'} creator={'Top Viewer'} views={'10 Million'} time={'10 Days'}/></Link>
                <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/U30d6mG_jaI/maxresdefault.jpg'} title={'Get More Views in Just 100 Days'} creator={'Top Viewer'} views={'10 Million'} time={'10 Days'}/></Link>
                <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                    <Link to={'/watch'}><PreviewCard image={'https://i.ytimg.com/vi/U30d6mG_jaI/maxresdefault.jpg'} title={'Get More Views in Just 100 Days'} creator={'Top Viewer'} views={'10 Million'} time={'10 Days'}/></Link>
                </div>
            </div>
        </>
    )
}

export default Watch;
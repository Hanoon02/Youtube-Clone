import React from "react";
import ProfileCard from "../Cards/ProfileCard";

function Profile(){
    return(
        <>
            <div className={'flex flex-col'}>
                <img alt={'Banner'} className={'h-[500px]'} src={'https://preview.redd.it/0lnpopnp6gl61.jpg?width=2560&format=pjpg&auto=webp&s=dd2f8d54f89de96e72556307fb027d8efea52638'}/>
                <div className={'flex'}>
                    <img alt={'Profile'} className={'w-[80px] h-[80px] rounded-full border'} src={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'}/>
                    <div className={'flex flex-col px-4'}>
                        <p className={'text-2xl'}> Mr Beast</p>
                        <p className={'font-thin'}> 125M Subscribers</p>
                    </div>
                    <div className={'flex justify-end'}>
                        <div className={'rounded-full p-1 bg-stone-700 text-center h-[40px] w-[50px] mx-2'}><button>Join</button></div>
                        <div className={'bg-white text-black rounded-full p-1 h-[40px] w-[100px] text-center mx-2'}><button>Subscribe</button></div>
                    </div>
                </div>
                <div className={'flex py-5'}>
                    <p className={'px-4 text-lg'}> HOME </p>
                    <p className={'px-4 text-lg'}> VIDEOS </p>
                    <p className={'px-4 text-lg'}> PLAYLIST </p>
                    <p className={'px-4 text-lg'}> LIVE </p>
                    <p className={'px-4 text-lg'}> COMMUNITY </p>
                </div>
                <div className={'flex pb-4'}>
                    <img alt={'Main Video'} className={'w-[500px] rounded-lg'} src={'https://i.ytimg.com/vi/zxYjTTXc-J8/maxresdefault.jpg'}/>
                    <div className={'flex flex-col px-4'}>
                        <p className={'text-xl'}> 100 Kids on Island</p>
                        <p className={'font-thin pt-5 pb-3'}> 1.5M Views</p>
                        <p> New Video Upload</p>
                        <p className={'font-thin pt-2'}> Read More</p>
                    </div>
                </div>
                <hr className={'pt-4'}/>
                <div className={'flex flex-col'}>
                    <p className={'font-semibold'}> Videos </p>
                    <div className={'flex flex-wrap'}>
                        <ProfileCard title={'Hide and Seek'} view={'50 Million Views'} time={'1 week ago'} image={'https://i.ytimg.com/vi/00NgUctWoLQ/maxresdefault.jpg'}/>
                        <ProfileCard title={'Hide and Seek'} view={'50 Million Views'} time={'1 week ago'} image={'https://i.ytimg.com/vi/00NgUctWoLQ/maxresdefault.jpg'}/>
                        <ProfileCard title={'Hide and Seek'} view={'50 Million Views'} time={'1 week ago'} image={'https://i.ytimg.com/vi/00NgUctWoLQ/maxresdefault.jpg'}/>
                        <ProfileCard title={'Hide and Seek'} view={'50 Million Views'} time={'1 week ago'} image={'https://i.ytimg.com/vi/00NgUctWoLQ/maxresdefault.jpg'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
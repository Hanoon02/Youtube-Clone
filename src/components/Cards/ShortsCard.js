import React from "react";

function ShortsCard(props){
    return(
        <>
            <div className={'flex text-white'}>
                <img alt={'Shorts'} src={props.image} className={'object-cover w-1/2 h-[500px] rounded'}/>
                <div className={'flex flex-col px-2'}>
                    <p className={'text-xl px-2 py-4'}> {props.title} </p>
                    <div className={'flex'}>
                        <img alt={'Profile'} src={props.profile} className={'w-10 h-10 rounded-full mx-2'}/>
                        <p className={'font-thin text-sm px-2 py-2'}> {props.creator} </p>
                        <div className={'bg-white text-black rounded-2xl py-2 px-2'}><button>Subscribe</button></div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default ShortsCard;
import React from "react";
import {Link} from "react-router-dom";

function ShortsCard(props){
    return(
        <>
            <div className={'flex text-white'}>
                <img alt={'Shorts'} src={props.image} className={'object-cover w-1/2 h-[600px] w-[400px] rounded'}/>
                <div className={'flex flex-col px-2 pt-[400px]'}>
                    <p className={'text-xl px-2 py-4'}> {props.title} </p>
                    <Link to={'/profile'}><div className={'flex'}>
                        <img alt={'Profile'} src={props.profile} className={'w-10 h-10 rounded-full mx-2'}/>
                        <p className={'font-thin text-sm pr-2 py-2'}> {props.creator} </p>
                        <div className={'bg-white text-black rounded-2xl py-2 px-2'}><button>Subscribe</button></div>
                    </div></Link>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default ShortsCard;
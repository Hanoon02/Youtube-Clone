import React from "react";
import {Link} from "react-router-dom";

function PreviewCard(props){
    return(
        <>
            <div className={'flex pl-1 py-2'}>
                <img alt={'Preview'} src={props.image} className={'w-[180px] rounded'}/>
                <div className={'flex flex-col w-2/4 pl-2'}>
                    <p> {props.title} </p>
                    <Link to={'/profile'}> <p className={'font-thin text-sm'}> {props.creator} </p></Link>
                    <p className={'font-thin text-sm'}> {props.views} . {props.time}</p>
                </div>
            </div>
        </>
    )
}

export default PreviewCard;
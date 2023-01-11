import React from "react";
import {Link} from "react-router-dom";

function CommentCard(props){
    return(
        <>
            <div className={'flex py-2'}>
                <img alt={'profile'} className={'w-[50px] h-[50px] rounded-full'} src={props.image}/>
                <div className={'flex flex-col px-2'}>
                    <div className={'flex'}>
                        <Link to={'/profile'}><p> {props.name} </p></Link>
                        <p className={'font-thin pl-2'}> {props.time} </p>
                    </div>
                    <p className={'pt-1'}> {props.comment} </p>
                </div>
            </div>
        </>
    )
}

export default CommentCard;
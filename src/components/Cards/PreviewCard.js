import React from "react";

function PreviewCard(props){
    return(
        <>
            <div className={'flex pl-1 py-2'}>
                <img alt={'Preview'} src={props.image} className={'w-1/2 rounded'}/>
                <div className={'flex flex-col w-2/4 pl-1'}>
                    <p> {props.title} </p>
                    <p className={'font-thin text-sm'}> {props.creator} </p>
                    <p className={'font-thin text-sm'}> {props.views} . {props.time}</p>
                </div>
            </div>
        </>
    )
}

export default PreviewCard;
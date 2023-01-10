import React from "react";

function ProfileCard(props){
    return(
        <>
            <div className={'flex text-white flex-col pt-4 px-2'}>
                <img alt={'thumbnail'} src={props.image} className={'object-cover h-[150px] rounded'}/>
                <p className={'py-1 font-semibold'}>{props.title}</p>
                <p className={'font-thin'}>{props.view}.{props.time}</p>
            </div>
        </>
    )
}

export default ProfileCard;
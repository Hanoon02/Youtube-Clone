import React from 'react'
import {Link} from "react-router-dom";

function VideoCard(props) {
    return(
        <>
        <div class="overflow-hidden shadow-lg rounded-lg h-90 cursor-pointer m-auto text-white">
            <div href="#" class="w-full block h-full p-1">
                <img alt="Thumbnail" src={props.thumbnail} class="max-h-40 w-full object-cover rounded-lg"/>
                <div class="w-full p-2">
                    <div className={'flex'}>
                        <Link to={'/profile'}><img alt="profile" src={props.profile} className="mx-auto object-cover rounded-full h-10 w-10 mr-2"/></Link>
                        <p class="text-lg font-medium mb-2">
                           {props.imageTitle}
                        </p>
                    </div>
                    <div class="flex items-center mt-2">
                        <div class="flex flex-col justify-between ml-4 text-sm">
                            <Link to={'/profile'}><p class="text-gray-800 dark:text-white cursor-pointer">
                                {props.creator}
                            </p></Link>
                            <p class="text-gray-400 dark:text-gray-300">
                                {props.views} - {props.time}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default VideoCard
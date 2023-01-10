import React from "react";
import {Link} from "react-router-dom";

function Menu(){
    return(
        <>
            <div className={'px-4'}>
                <Link to={'/'}><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Home</button></div></Link>
                <Link to={'/shorts'}><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Shorts</button></div></Link>
                <Link to={'/subscriptions'}><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Subscriptions</button></div></Link>
                <hr className={'pt-2'}/>
                <div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Library</button></div>
                <div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>History</button></div>
                <div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Your Videos</button></div>
                <div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Watch Later</button></div>
                <hr className={'pt-2'}/>
                <p className={'p-3'}>Subscriptions</p>
            </div>
        </>
    )
}

export default Menu;
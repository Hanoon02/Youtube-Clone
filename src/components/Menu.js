import React from "react";
import {Link} from "react-router-dom";

function Menu(){
    return(
        <>
            <div className={'px-4'}>
                <Link to={'/'}><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Home</button></div></Link>
                <Link to={'/shorts'}><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Shorts</button></div></Link>
                <Link to={'/subscriptions'}><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin pb-3'}><button>Subscriptions</button></div></Link>
                <hr className={'pt-2'}/>
                <Link to={'/library'}><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Library</button></div></Link>
                <Link to={'/history'}><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>History</button></div></Link>
                <Link to={'/later'}><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin pb-3'}><button>Watch Later</button></div></Link>
                <hr className={'pt-2'}/>
                <p className={'p-3'}>Subscriptions</p>
                <Link to={'/profile'}> <p className={'px-3 hover:bg-stone-600 rounded-lg font-thin py-2'}> Mr Beast</p></Link>
                <Link to={'/profile'}> <p className={'px-3 hover:bg-stone-600 rounded-lg font-thin py-2'}> IShowSpeed</p></Link>
                <Link to={'/profile'}> <p className={'px-3 hover:bg-stone-600 rounded-lg font-thin py-2'}> PewDiePie</p></Link>
                <Link to={'/profile'}> <p className={'px-3 hover:bg-stone-600 rounded-lg font-thin py-2'}> Mark Rober</p></Link>
            </div>
        </>
    )
}

export default Menu;
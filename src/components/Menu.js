import React from "react";
import {Link} from "react-router-dom";

function Menu(){
    return(
        <>
            <div className={'px-4'}>
                <Link to={'/'}><div className={'flex hover:bg-stone-600 rounded pl-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2 mt-1" width="28"
                         height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="5 12 3 12 12 3 21 12 19 12"/>
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
                        <rect x="10" y="12" width="4" height="4"/>
                    </svg><div className={'w-64 py-2  rounded-lg px-2 font-thin'}><button>Home</button></div></div></Link>
                <Link to={'/shorts'}><div className={'flex hover:bg-stone-600 rounded pl-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-movie mt-1" width="28"
                         height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="2"/>
                        <line x1="8" y1="4" x2="8" y2="20"/>
                        <line x1="16" y1="4" x2="16" y2="20"/>
                        <line x1="4" y1="8" x2="8" y2="8"/>
                        <line x1="4" y1="16" x2="8" y2="16"/>
                        <line x1="4" y1="12" x2="20" y2="12"/>
                        <line x1="16" y1="8" x2="20" y2="8"/>
                        <line x1="16" y1="16" x2="20" y2="16"/>
                    </svg><div className={'w-64 py-2 rounded-lg px-2 font-thin'}><button>Shorts</button></div></div></Link>
                <Link to={'/subscriptions'}><div className={'flex hover:bg-stone-600 rounded pl-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-tv mt-1"
                         width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="7" width="18" height="13" rx="2"/>
                        <polyline points="16 3 12 7 8 3"/>
                    </svg><div className={'w-64 py-2 rounded-lg px-2 font-thin pb-3'}><button>Subscriptions</button></div></div></Link>
                <hr className={'pt-2'}/>
                <Link to={'/library'}><div className={'flex hover:bg-stone-600 rounded pl-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-audio-tape mt-1"
                         width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2"/>
                        <path d="M3 17l4 -3h10l4 3"/>
                        <circle cx="7.5" cy="9.5" r=".5" fill="currentColor"/>
                        <circle cx="16.5" cy="9.5" r=".5" fill="currentColor"/>
                    </svg><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-2 font-thin'}><button>Library</button></div></div></Link>
                <Link to={'/history'}><div className={'flex hover:bg-stone-600 rounded pl-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock mt-1" width="28"
                         height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="9"/>
                        <polyline points="12 7 12 12 15 15"/>
                    </svg><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-2 font-thin'}><button>History</button></div></div></Link>
                <Link to={'/later'}><div className={'flex hover:bg-stone-600 rounded pl-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-stats mt-1"
                         width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"/>
                        <path d="M18 14v4h4"/>
                        <circle cx="18" cy="18" r="4"/>
                        <path d="M15 3v4"/>
                        <path d="M7 3v4"/>
                        <path d="M3 11h16"/>
                    </svg><div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-2 font-thin pb-3'}><button>Watch Later</button></div></div></Link>
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
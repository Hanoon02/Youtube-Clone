import React from "react";

function Menu(){
    return(
        <>
            <div className={'px-4'}>
                <div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Home</button></div>
                <div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Shorts</button></div>
                <div className={'w-64 py-2 hover:bg-stone-600 rounded-lg px-4 font-thin'}><button>Subscriptions</button></div>
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
import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Menu from "./Menu";

function Header(props){
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {setShowMenu(!showMenu)}

    return(
        <>
        <div className="flex">
            <div className='pl-6 py-2 w-1/6 flex '>
                <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
                <Link to={'/'}><p className={'w-1/6 text-2xl pl-3'}>YouTube </p></Link>
            </div>
            <div className={'w-1/6'}></div>
            <div className='pl-6 flex mx-2 w-2/6 my-2 rounded-full border-transparent border-[0.5px] border-gray-100'>
                <input type="text" id="rounded-email" className=" w-full px-4 bg-black text-white placeholder-gray-400 shadow-sm text-base focus:border-none " placeholder="Search"/>
                <button className={'w-[75px] bg-white text-black rounded-r-full'}><Link to={'/search'}>Search</Link></button>
            </div>
            <div className='flex w-2/6 justify-end align-middle'>
                <div className='py-4 px-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-upload" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                        <polyline points="7 9 12 4 17 9" />
                        <line x1="12" y1="4" x2="12" y2="16" />
                    </svg>
                </div>
                <div className='py-4 px-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                </div>
                <img alt={'profile'} className={'w-[60px] h-[60px] rounded-full p-2 m-1'} src={'https://www.famousbirthdays.com/faces/mr-beast-image.jpg'}/>
            </div>
        </div>
        {showMenu &&
            <>
            <div className={'absolute h-full w-full bg-black opacity-40'} onClick={handleMenu}></div>
            <div className={'absolute w-[300px] h-full bg-black'}>
                <Menu/>
            </div>
            </>}
        </>
    )
}

export default Header
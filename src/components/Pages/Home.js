import React from 'react'
import VideoCard from "../Cards/VideoCard";
import {Link} from "react-router-dom";
function Home() {
    return(
        <>
            <div className={'flex flex-col px-2'}>
                <div className='flex py-3 px-3'>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> All </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Gaming </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Music </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Memes </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Memes </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Memes </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Memes </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Memes </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Memes </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Memes </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Memes </button></div>
                </div>
                <div className='grid grid-cols-4 pt-3'>
                    <Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link>
                    <Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link>
                    <Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link>
                    <Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link>
                    <Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link>
                    <Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link>
                    <Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link>
                    <Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link>
                    <Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link>
                    <Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link>
                </div>
            </div>
        </>
    )
}

export default Home
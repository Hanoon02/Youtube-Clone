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
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Anime </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Movies </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Tiktok </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Dance </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Memes </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Dance </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Anime </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Tiktok </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Dance </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Dance </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Anime </button></div>
                </div>
                <div className='grid grid-cols-4 pt-3'>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast New Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast New Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast New Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast New Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast New Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                </div>
            </div>
        </>
    )
}

export default Home
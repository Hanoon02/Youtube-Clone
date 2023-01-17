import React from "react";
import {Link} from "react-router-dom";
import VideoCard from "../Cards/VideoCard";

function Subscriptions(){
    return(
        <>
            <div className={'px-5'}>
                <p className={'text-xl pl-4'}> This Week </p>
                <div className='grid grid-cols-5 py-3'>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                </div>
                <hr className={'py-3 px-3'}/>
            </div>
            <div className={'px-2'}>
                <p className={'text-xl pl-4'}> This Month </p>
                <div className='grid grid-cols-5 py-3'>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                </div>
                <hr className={'py-3 px-3'}/>
            </div>
            <div className={'px-2'}>
                <p className={'text-xl pl-4'}> Older </p>
                <div className='grid grid-cols-5 py-3'>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Pewdiepie 100 Million Video" creator= "Pewdiepie" views='20 Million' time={'16-Dec'} profile={'https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png'} thumbnail={'https://i.ytimg.com/vi/4RfNXfnXfA8/maxresdefault.jpg'}/></Link></div>
                    <div className={'px-2'}><Link to={"/watch"}>< VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/></Link></div>
                </div>
                <hr/>
            </div>
        </>
    )
}

export default Subscriptions;
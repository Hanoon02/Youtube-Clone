import React from 'react'
import VideoCard from "./VideoCard";
function HomeCategory() {
    return(
        <>
            <div className={'flex flex-col'}>
                <div className='flex py-3 px-3'>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> All </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Gaming </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Music </button></div>
                    <div className=' py-2 px-4 rounded-lg bg-stone-600 mx-2'><button> Memes </button></div>
                </div>
                <div className='grid grid-cols-4 pt-3'>
                    < VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/>
                    < VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/>
                    < VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/>
                    < VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/>
                    < VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/>
                    < VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/>
                    < VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/>
                    < VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/>
                    < VideoCard imageTitle = "Mr Beast Monkey Video" creator= "Mr Beast" views='15 Million' time={'16-Dec'} profile={'https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'} thumbnail={'https://i.ytimg.com/vi/LQqIJsa2bjM/maxresdefault.jpg'}/>
                </div>
            </div>
        </>
    )
}

export default HomeCategory
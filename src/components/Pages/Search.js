import React from "react";
import {Link} from "react-router-dom";
import SearchCard from "../Cards/SearchCard";

function Search(){
    return(
        <>
            <p className={'pl-10 text-lg py-3'}> Filters </p>
            <hr className={'py-2'}/>
            <div className={'pl-10'}>
                <Link to={'/watch'}><SearchCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast 1 Million Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                <Link to={'/watch'}><SearchCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast 1 Million Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                <Link to={'/watch'}><SearchCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast 1 Million Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                <Link to={'/watch'}><SearchCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast 1 Million Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
                <Link to={'/watch'}><SearchCard image={'https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg'} title={'Mr Beast 1 Million Giveaway'} creator={'Mr Beast'} views={'20 Million'} time={'2 Days'}/></Link>
            </div>
        </>
    )
}

export default Search;
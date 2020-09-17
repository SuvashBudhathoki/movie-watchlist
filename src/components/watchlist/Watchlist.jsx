import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import MovieCard from '../movie-card/MovieCard';

const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);
    console.log('watc', watchlist)
    return (
        <div>
            <h1>WatchList</h1>
            <div style={{ display: 'flex' }}>{watchlist.map(movie => <MovieCard movie={movie} />)}</div>
        </div>
    )
}

export default Watchlist;

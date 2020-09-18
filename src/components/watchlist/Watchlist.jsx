import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import MovieCard from '../movie-card/MovieCard';

const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);
    return (
        <div>
            <h1>WatchList</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>{watchlist.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}</div>
        </div>
    )
}

export default Watchlist;

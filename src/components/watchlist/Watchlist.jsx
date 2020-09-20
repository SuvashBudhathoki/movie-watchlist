import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import MovieCard from '../movie-card/MovieCard';
import { sortMovies } from '../../utils/utils';


const Watchlist = () => {

    const { watchlist, sortBy } = useContext(GlobalContext)

    const sortedWatchlist = sortMovies(watchlist, sortBy)


    return (
        <div>
            <h1>WatchList</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>{sortedWatchlist.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}</div>
        </div>
    )
}

export default Watchlist;

import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import MovieCard from '../movie-card/MovieCard';
import sortMovies from '../../fixtures/selectors';


const Watchlist = () => {

    const { watchlist, sortBy } = useContext(GlobalContext);

    const [sortedWatchlist, setSortedWatchlist] = useState([])
    useEffect(() => {
        console.log('inside watchlist')
        setSortedWatchlist(sortMovies(watchlist, sortBy))
    }, [watchlist, sortBy])

    console.log('sort', sortBy)



    return (
        <div>
            <h1>WatchList</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>{watchlist.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}</div>
        </div>
    )
}

export default Watchlist;

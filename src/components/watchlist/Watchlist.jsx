import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import MovieCard from '../movie-card/MovieCard';
import { sortMovies } from '../../utils/utils';

const Watchlist = () => {
    const { watchlist, sortBy } = useContext(GlobalContext);
    const sortedWatchlist = sortMovies(watchlist, sortBy);
    return (
        <div>
            <hr className='my-3' />
            <h4>My WatchList</h4>
            <hr className='my-3' />
            <div style={movieStyle}>
                {sortedWatchlist.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};

const movieStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '1rem'
};

export default Watchlist;

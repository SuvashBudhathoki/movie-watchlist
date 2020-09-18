import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import MovieCard from '../movie-card/MovieCard';

const WatchedList = () => {

    const { watched } = useContext(GlobalContext)
    return (
        <div>
            {watched.length > 0 ? watched.map(movie => <MovieCard movie={movie} type='watched' key={movie.imdbID} />) : 'Empty list'}
        </div>
    )
}

export default WatchedList;
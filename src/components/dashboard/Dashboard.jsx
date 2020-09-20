import React from 'react';
import Watchlist from '../watchlist/Watchlist';
import MovieStatistics from '../movie-statistics/MovieStatistics';
import MovieFilters from '../movie-filters/MovieFilters';

const Dashboard = () => {
    return (
        <div>
            <MovieStatistics />
            <MovieFilters />
            <Watchlist />
        </div>
    )
}
export default Dashboard;
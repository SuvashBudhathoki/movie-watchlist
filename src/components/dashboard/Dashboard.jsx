import React from 'react';
import Watchlist from '../watchlist/Watchlist';
import MovieStatistics from '../movie-statistics/MovieStatistics';

const Dashboard = () => {
    return (
        <div>
            <MovieStatistics />
            <Watchlist />
        </div>
    )
}
export default Dashboard;
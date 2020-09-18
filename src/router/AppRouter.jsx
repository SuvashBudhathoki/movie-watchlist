import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Watchlist from '../components/watchlist/Watchlist';
import Dashboard from '../components/dashboard/Dashboard';
import NotFoundPage from '../components/not-found-page/NotFoundPage';
import AddMovie from '../components/add-movie/AddMovie';
import Header from '../components/header/Header';
import WatchedList from '../components/watched-list/WatchedList';


const AppRouter = () => {
    return (
        <Router>
            <>
                <Header />
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/watchlist' component={Watchlist} />
                    <Route path='/add' component={AddMovie} />
                    <Route path='/watched' component={WatchedList} />
                    <Route component={NotFoundPage} />
                </Switch>
            </>
        </Router>
    )
}

export default AppRouter;
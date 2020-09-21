import React, { createContext, useReducer, useEffect } from 'react';
import MoviesReducer from './reducer/MoviesReducer';
import CONSTANTS from '../constants/constants';


//initial state

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    sortBy: 'date'
}

// create context

export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(MoviesReducer, initialState);

    //useEffect to set watchlist to localstorage each time state is changed

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    }, [state])

    //actions for movie reducers

    const addMovieToWatchlist = movie => {
        dispatch({
            type: CONSTANTS.ADD_MOVIE_TO_WATCHLIST,
            payload: movie
        })
    }

    const removeMovieFromWatchlist = id => {
        dispatch({
            type: CONSTANTS.REMOVE_MOVIE_FROM_WATCHLIST,
            payload: id
        })
    }

    // actions for filters

    const sortByDate = () => {
        dispatch({
            type: CONSTANTS.SORT_BY_DATE
        })
    };

    const sortByAlphabets = () => {
        dispatch({
            type: CONSTANTS.SORT_BY_ALPHABETS
        })
    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            sortBy: state.sortBy,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            sortByAlphabets,
            sortByDate
        }}>
            {props.children}
        </GlobalContext.Provider>
    )

}

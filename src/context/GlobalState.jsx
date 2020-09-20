import React, { createContext, useReducer, useEffect } from 'react';
import MoviesReducer from './reducers/MoviesReducer';


//initial state

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    sortBy: localStorage.getItem('sortby') ? JSON.parse(localStorage.getItem('sortby')) : 'date'
}

// creating root reducer


// create context

export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(MoviesReducer, initialState);

    //useEffect

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('sortby', JSON.stringify(state.sortBy))
    }, [state])

    //actions for movie reducers

    const addMovieToWatchlist = movie => {
        dispatch({
            type: 'ADD_MOVIE_TO_WATCHLIST',
            payload: movie
        })
    }

    const removeMovieFromWatchlist = id => {
        dispatch({
            type: 'REMOVE_MOVIE_FROM_WATCHLIST',
            payload: id
        })
    }


    // actions for filter

    const sortByDate = () => ({
        type: "SORT_BY_DATE"
    });

    const sortByAlphabets = () => ({
        type: "SORT_BY_ALPHABETS"
    });
    console.log('filter', state.sortBy)
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

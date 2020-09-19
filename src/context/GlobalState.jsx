import React, { createContext, useReducer, useEffect } from 'react';
import MoviesReducer from './reducers/MoviesReducer';
import FiltersReducer from './reducers/FiltersReducer';


//initial state

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
    sortBy: localStorage.getItem('sortby') ? JSON.parse(localStorage.getItem('sortby')) : 'date'

}

// creating root reducer

// const rootReducer = (state, action) => [MoviesReducer, FiltersReducer].reduce((state, reducer) => reducer(state, action), state);

// create context

export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(MoviesReducer, initialState);

    //useEffect

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
        localStorage.setItem('sortby', JSON.stringify(state.sortBy))
    }, [state])

    //actions for App reducers

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

    const addMovieToWatched = movie => {
        dispatch({
            type: 'ADD_MOVIE_TO_WATCHED',
            payload: movie
        })
    }

    const moveMovieToWatchlist = movie => {
        dispatch({
            type: 'MOVE_TO_WATCHLIST',
            payload: movie
        })
    }

    const removeMovieFromWatched = id => {
        dispatch({
            type: 'REMOVE_FROM_WATCHED',
            payload: id
        })
    }

    // actions for filter

    //SORT_BY_DATE

    const sortByDate = () => ({
        type: "SORT_BY_DATE"
    });

    //SORT_BY_AMOUNT

    const sortByAlphabets = () => ({
        type: "SORT_BY_ALPHABETS"
    });
    console.log('filter', state.sortBy)
    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            sortBy: state.sortBy,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveMovieToWatchlist,
            removeMovieFromWatched,
            sortByAlphabets,
            sortByDate
        }}>
            {props.children}
        </GlobalContext.Provider>
    )

}

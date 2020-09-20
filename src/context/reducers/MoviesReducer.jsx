export default (state, action) => {
    switch (action.type) {

        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.imdbID !== action.payload)
            }

        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            };
        case "SORT_BY_ALPHABETS":
            return {
                ...state,
                sortBy: "alphabet"
            };
        default:
            return state;
    }
}
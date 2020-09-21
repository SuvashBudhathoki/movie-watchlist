import CONSTANTS from '../../constants/constants';

export default (state, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        case CONSTANTS.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.imdbID !== action.payload)
            }
        case CONSTANTS.SORT_BY_DATE:
            return {
                ...state,
                sortBy: "date"
            };
        case CONSTANTS.SORT_BY_ALPHABETS:
            return {
                ...state,
                sortBy: "alphabet"
            };
        default:
            return state;
    }
}



//Reducer

export default (state, action) => {
    switch (action.type) {
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
};

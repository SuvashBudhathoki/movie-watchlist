
// export default (movies, sortBy) => {
//     console.log('sec', sortBy)
//     if (sortBy === 'date') {
//         return movies
//             .sort((a, b) => a.dateWatched < b.dateWatched ? 1 : -1
//             );
//     } else {
//         return movies.Title.sort()
//     }

// };
// export default (movies) => {

//     return movies
//         .sort((a, b) => a.dateWatched < b.dateWatched ? 1 : -1
//         );


// };

export default (movies, sortBy) => {
    console.log('selec', sortBy)
    if (sortBy === 'date') {
        return movies
            .sort((a, b) => a.dateWatched > b.dateWatched ? 1 : -1
            );
    } else {
        return movies.sort((a, b) => a.Title < b.Title ? 1 : -1)
    }

};


//creating new date for default and formatting as 2019-09-19
const newDate = () => {
    const dateObj = new Date();
    const month = ((dateObj.getUTCMonth() + 1) < 10 ? '0' : '') + (dateObj.getUTCMonth() + 1); //months from 1-12
    const day = (dateObj.getUTCDate() < 10 ? '0' : '') + dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return year + "-" + month + "-" + day;
}

// sorting movies according to date watched or title

const sortMovies = (movies, sortBy) => {
    if (sortBy === 'date') {
        return movies
            .sort((a, b) => a.dateWatched > b.dateWatched ? 1 : -1
            );
    } else {
        return movies.sort((a, b) => a.Title.toLowerCase() > b.Title.toLowerCase() ? 1 : -1)
    }
};


export { newDate, sortMovies }

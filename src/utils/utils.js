import CONSTANTS from '../constants/constants';
//fetch movie result from search item


const fetchMovie = async (e, setResult, setLoading) => {

    // use of 't' as query search provides single result only

    try {
        setLoading(true)
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${CONSTANTS.OMDB_API_KEY}&t=${e.target.value}&r=json`);
        const data = await response.json();
        if (!data.error) {
            setResult(data)
            setLoading(false)
        }
        else {
            setResult([])
            setLoading(false)
        }

    } catch (err) {
        console.error(err)
    }

}

//creating new date for default and formatting as 2019-09-19
// +1 needed for month as it starts from 1-12
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

// display a filler image if poster is N/A from api request
const getPoster = (poster, fillerImage) => {
    return poster !== 'N/A' ? poster : fillerImage
}

// calculate average rating for the user

const averageRating = (watchlist, setAvg) => setAvg(watchlist.length > 0 ? watchlist.reduce((acc, movie) => acc + movie.rating, 0) / watchlist.length : 0);

// calculate total runtime of movies watched in the past month

const totalRuntime = (watchlist, setRuntime) => {
    setRuntime(watchlist.reduce((acc, { Runtime }) => {
        let runtimeInNumber = Runtime !== 'N/A' && Runtime.match(/(\d)+/)
            ;
        return acc + (Runtime !== 'N/A' && Number(runtimeInNumber[0]))
    }, 0));
}

//check if movie already exist in watchlist

const movieExist = (watchlist, movie) => watchlist.find(result => movie.imdbID === result.imdbID)

const month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

export {
    newDate,
    sortMovies,
    getPoster,
    averageRating,
    totalRuntime,
    movieExist,
    fetchMovie,
    month
}

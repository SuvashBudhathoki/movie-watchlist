import CONSTANTS from '../constants/constants';

//fetch movie result from search item

const fetchMovie = async (e, setResult, setLoading) => {

    // use of 't' as query search provides single result only

    try {
        setLoading(true)
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${CONSTANTS.OMDB_API_KEY}&t=${e.target.value}&r=json`);
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

//creating new date for default and formatting as 2019-09-19 when adding new movie

const newDate = () => {
    const dateObj = new Date();
    const month = ((dateObj.getUTCMonth() + 1) < 10 ? '0' : '') + (dateObj.getUTCMonth() + 1); //months from 1-12
    const day = (dateObj.getUTCDate() < 10 ? '0' : '') + dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return year + "-" + month + "-" + day;
}

// sorting movies according to date watched in descending order or title

const sortMovies = (movies, sortBy) => {
    if (sortBy === 'date') {
        return movies
            .sort((a, b) => a.dateWatched < b.dateWatched ? 1 : -1
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

const averageRating = (watchlist, setAvg) => setAvg(watchlist.length > 0 ? watchlist.reduce((acc, movie) => acc + movie.ratingFromUser, 0) / watchlist.length : 0);


// Calculate the current month with the date watched and if it is from the previous month return the value along with the genre for all the movies in the watchlist

const getGenreAndRuntime = (watchlist) => {
    let moviesWatchedPastMonth = [];
    let genre = []
    // eslint-disable-next-line array-callback-return
    watchlist.map(({ dateWatched, Runtime, Genre }) => {
        const movieWatchedMonth = new Date(dateWatched).getMonth() + 1;
        const currentMonth = new Date().getMonth() + 1;
        if (currentMonth - movieWatchedMonth === 1) {
            moviesWatchedPastMonth.push(Runtime);
        }
        genre.push(Genre)
    });

    // create string, make an array of the words from string and finally sort it to find out the most repeated genre watched

    const stringGenre = genre.join();
    const finalGenre = stringGenre.split(',').sort();

    return [moviesWatchedPastMonth, finalGenre];
};

// calculate total runtime of movies watched in the past month

const totalRuntime = (watchlist, setRuntime) => {
    setRuntime(watchlist.reduce((acc, runtime) => {
        let runtimeInNumber = runtime !== 'N/A' && runtime.match(/(\d)+/)
            ;
        return acc + (runtime !== 'N/A' && Number(runtimeInNumber[0]))
    }, 0));
}

// set the most common genre watched 

const commonGenre = (genreList, setRepeatedGenre) => {
    let repeatedGenre, currrentGenre = genreList[0]
    let max = 0, count = 0;
    genreList.forEach((genre) => {
        if (genre === currrentGenre) {
            count++
        } else {
            count = 0;
            currrentGenre = genre
        }
        if (max < count) {
            max = count;
            repeatedGenre = genre;
        }

    })
    setRepeatedGenre(repeatedGenre);
}

//check if movie already exist in watchlist

const movieExist = (watchlist, movie) => watchlist.find(result => movie.imdbID === result.imdbID)

//to display the name of the month in the past
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
    commonGenre,
    getGenreAndRuntime,
    month
}

import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import MovieResultCard from '../movie-result-card/MovieResultCard';
import CustomAlert from '../custom-alert/CustomAlert';
import { Spinner } from 'reactstrap';

import { newDate, fetchMovie } from '../../utils/utils';
import AddMovieForm from './AddMovieForm';

const AddMovie = () => {
    const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

    const [nameOfMovie, setName] = useState('');
    const [dateWatched, setDate] = useState(newDate());
    const [ratingFromUser, setRating] = useState(0);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState('');

    const onRatingChange = (rating) => {
        setRating(rating);
    };

    const onDateChange = (e) => {
        setDate(e.target.value);
    };

    //Change of movie name

    const onNameChange = async (e) => {
        e.preventDefault();
        setName(e.target.value);
        fetchMovie(e, setResult, setLoading);
    };

    // check to see if movie is already in the watchlist
    const checkMovieExist = (watchlist, result) =>
        watchlist.find((mv) => mv.imdbID === result.imdbID);

    const onSubmit = (e) => {
        e.preventDefault();
        const storedMovie = checkMovieExist(watchlist, result);

        // if movie is already in the list, alert danger else alert success

        if (!storedMovie) {
            addMovieToWatchlist({ dateWatched, ratingFromUser, ...result });
            setAlert('success');
        } else {
            setAlert('danger');
        }

        // reset all states for new entry

        setName('');
        setDate(newDate());
        setRating(0);
    };
    return (
        <div className='mr-auto'>
            <AddMovieForm
                onSubmit={onSubmit}
                onNameChange={onNameChange}
                nameOfMovie={nameOfMovie}
                onDateChange={onDateChange}
                dateWatched={dateWatched}
                ratingFromUser={ratingFromUser}
                onRatingChange={onRatingChange}
            />

            {alert && (
                <CustomAlert title={result.Title} type={alert} setAlert={setAlert} />
            )}

            <div className='mt-3'>
                {!loading ? (
                    result.Title ? (
                        <MovieResultCard setName={setName} movie={result} />
                    ) : (
                            <div className='alert alert-danger' role='alert'>
                                Please enter the correct movie name!
                            </div>
                        )
                ) : (
                        <div className='text-center'>
                            <Spinner color='dark' />
                        </div>
                    )}
            </div>
        </div>
    );
};

export default AddMovie;

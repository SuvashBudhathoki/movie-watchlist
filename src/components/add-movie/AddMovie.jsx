import React, { useContext, useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Badge } from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';
import MovieResultCard from '../movie-result-card/MovieResultCard';
import Spinner from '../spinner/Spinner';
import StarRatings from 'react-star-ratings';
import { newDate, fetchMovie } from '../../utils/utils';

const AddMovie = () => {
    const { addMovieToWatchlist } = useContext(GlobalContext);
    const [nameOfMovie, setName] = useState('');
    const [dateWatched, setDate] = useState(newDate());
    const [rating, setRating] = useState(0);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false)


    const onDateChange = e => {
        setDate(e.target.value);
    }
    // //Change of movie name

    const onNameChange = async e => {
        e.preventDefault();
        setName(e.target.value);
        await fetchMovie(e, setResult, setLoading)
    }

    const onSubmit = e => {
        e.preventDefault();
        addMovieToWatchlist({ dateWatched, rating, ...result });
        setName('');
        setDate(newDate())
        setRating(0);
    }
    return (
        <div className='mr-auto ml-3'>
            <Form onSubmit={onSubmit} className='mb-5'>
                <FormGroup>
                    <Label for="nameOfMovie"><Badge color='info'>Movie </Badge></Label>
                    <Input
                        onChange={onNameChange}
                        value={nameOfMovie}
                        type="text"
                        name="movieName"
                        placeholder="Enter the movie name"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="dateWatched"><Badge color='info'>Date Watched </Badge></Label>
                    <Input
                        onChange={onDateChange}
                        value={dateWatched}
                        type="date"
                        name="date"
                        placeholder="Select the date"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="rateMovie" className='mr-3'><Badge color='info'>Your Ratings </Badge></Label>
                    <StarRatings
                        rating={rating}
                        starRatedColor='blue'
                        changeRating={setRating}
                        name='rating'
                        starDimension='30px'
                    />
                </FormGroup>
                <Button
                    disabled={nameOfMovie ? false : true}
                    color='primary'
                >Add to Watchlist
                </Button>
            </Form>
            <div className='mt-3'>
                {!loading ? (result.Title ? <MovieResultCard setName={setName} movie={result} /> : 'Please enter the correct movie name') : <Spinner />}
            </div>
        </div>

    )
}


export default AddMovie;
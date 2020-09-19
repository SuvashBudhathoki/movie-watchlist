import React, { useContext, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';
import MovieResultCard from '../movie-result-card/MovieResultCard';
import StarRatings from 'react-star-ratings';
import { newDate } from '../../utils/utils';

const AddMovie = () => {
    const { addMovieToWatchlist } = useContext(GlobalContext);
    const [nameOfMovie, setName] = useState('');
    const [dateWatched, setDate] = useState(newDate());
    const [rating, setRating] = useState(0);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false)

    console.log('date', dateWatched)

    const onDateChange = e => {
        setDate(e.target.value);
    }
    //fetching the data for movies

    const fetchMovie = async (e) => {

        // use of 't' as query search provides single result only

        try {
            setLoading(true)
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5d521e5&t=${e.target.value}&r=json`);
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
    //Change of movie name

    const onNameChange = async e => {
        e.preventDefault();
        setName(e.target.value);
        fetchMovie(e)
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
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="nameOfMovie">Movie </Label>
                    <Input
                        onChange={onNameChange}
                        value={nameOfMovie}
                        type="text"
                        name="movieName"
                        placeholder="Enter the movie name"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="dateWatched">Date Watched</Label>
                    <Input
                        onChange={onDateChange}
                        value={dateWatched}
                        type="date"
                        name="date"
                        placeholder="Select the date"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="rateMovie" className='mr-3'>Rate the Movie</Label>
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
                {!loading ? result.Title ? <MovieResultCard setName={setName} movie={result} /> : 'Please enter the correct movie name' : ('Loading...')}
            </div>
        </div>

    )
}


export default AddMovie;
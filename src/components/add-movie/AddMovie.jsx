import React, { useContext, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';
import MovieResultCard from '../movie-result-card/MovieResultCard';


const AddMovie = () => {

    const { addMovieToWatchlist } = useContext(GlobalContext);
    const [nameOfMovie, setName] = useState('');
    const [dateWatched, setDate] = useState('');
    const [rating, setRating] = useState(1);
    const [poster, setPoster] = useState('');
    const [result, setResult] = useState('');
    const [genre, setGenre] = useState('')

    const onDateChange = e => {
        setDate(e.target.value);
    }

    const onNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        (fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5d521e5&t=${e.target.value}&r=json`).then(res => res.json()).then(data => {
            if (!data.error) {
                console.log('data', data)
                setResult(data);
            } else {
                setResult([])
            }
        }))

    }

    const onRatingChange = (e) => {
        setRating(e.target.value)
    }

    // use of 't' provides single result only
    const onSubmit = e => {
        e.preventDefault();

        addMovieToWatchlist({ dateWatched, rating, ...result })

    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                {/* <FormGroup>
                <Label for="nameOfMovie">Plain Text (Static)</Label>
                <Input plaintext value="Some plain text/ static value" />
            </FormGroup> */}
                <FormGroup>
                    <Label for="nameOfMovie">Email</Label>
                    <Input
                        onChange={onNameChange}
                        value={nameOfMovie}
                        type="text"
                        name="movieName"
                        placeholder="Enter the movie name"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="dateWatched">Date</Label>
                    <Input
                        onChange={onDateChange}
                        value={dateWatched}
                        type="date"
                        name="date"
                        placeholder="Select the date"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="rateMovie">Rate the Movie</Label>
                    <Input type="select" name="select" onChange={onRatingChange} value={rating}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>

                <Button>Add to Watchlist</Button>



            </Form>

            {result && (<h1>{result.Title}</h1>)}
            {/* <div className='d-flex flex-wrap '>{results && (results.map(movie => <MovieResultCard movie={movie} />))}</div> */}

        </div>

    )
}


export default AddMovie;
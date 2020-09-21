import React from 'react';
import { Form, FormGroup, Label, Input, Button, Badge } from 'reactstrap';
import StarRatings from 'react-star-ratings';

const AddMovieForm = ({ onSubmit, onNameChange, onDateChange, nameOfMovie, dateWatched, rating, onRatingChange }) => {
    return (
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
                    changeRating={onRatingChange}
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

    )
}

export default AddMovieForm;
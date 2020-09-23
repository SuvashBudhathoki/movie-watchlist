import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert,
    Col
} from 'reactstrap';
import StarRatings from 'react-star-ratings';

const AddMovieForm = ({
    onSubmit,
    onNameChange,
    onDateChange,
    nameOfMovie,
    dateWatched,
    ratingFromUser,
    onRatingChange
}) => {
    return (
        <div className='shadow-box p-4'>
            <Alert color='primary' className='mb-5'>
                Please Enter Movies Details!
      </Alert>
            <Form onSubmit={onSubmit} className='mb-5'>
                <FormGroup row>
                    <Label for='nameOfMovie' sm={2}>
                        Movie
          </Label>
                    <Col sm={10}>
                        <Input
                            id='nameOfMovie'
                            onChange={onNameChange}
                            value={nameOfMovie}
                            type='text'
                            name='movieName'
                            placeholder='Enter the movie name'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='dateWatched' sm={2}>
                        Date Watched
          </Label>
                    <Col sm={10}>
                        <Input
                            onChange={onDateChange}
                            value={dateWatched}
                            type='date'
                            name='date'
                            placeholder='Select the date'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='rateMovie' className='mr-3' sm={2}>
                        Rate the movie
          </Label>
                    <StarRatings
                        rating={ratingFromUser}
                        starRatedColor='blue'
                        changeRating={onRatingChange}
                        name='rating'
                        starDimension='30px'
                    />
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button disabled={nameOfMovie ? false : true} color='success'>
                            Add to Watchlist
                             {/* + icon for watchlist */}
                            <svg
                                width='1em'
                                height='1em'
                                viewBox='0 0 16 16'
                                className='bi bi-plus-circle-fill ml-2'
                                fill='currentColor'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z'
                                />
                            </svg>
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
};

export default AddMovieForm;

import React, { useContext } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col, Button, Badge
} from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';
import StarRatings from 'react-star-ratings';


const MovieCard = ({ movie }) => {
    const { removeMovieFromWatchlist } = useContext(GlobalContext);
    return (
        <Row>
            <Col>
                <Card className='ml-3' style={{ flex: 1 }}>
                    <CardImg top height="300rem" width="100%" src={movie.Poster} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><Badge color='success' className='mr-2'>Title </Badge>{` ${movie.Title}`}</CardTitle>
                        <CardText><Badge color='success' className='mr-2'>Genre </Badge>{` ${movie.Genre}`} </CardText>
                        <CardText><Badge color='success' className='mr-2'>Date watched </Badge>{` ${movie.dateWatched}`} </CardText>
                        <CardText >
                            <Badge color='success' className='mr-2'>Rating </Badge>
                            <StarRatings
                                rating={movie.rating}
                                starDimension='25px'
                                starSpacing='1px'
                                starRatedColor='blue'
                            />
                        </CardText>
                        <Button color='danger' onClick={() => removeMovieFromWatchlist(movie.imdbID)}> X </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>

    );
};

export default MovieCard;
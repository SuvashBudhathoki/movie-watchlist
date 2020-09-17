import React, { useContext } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col, Button
} from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';


const MovieCard = ({ movie }) => {
    const { removeMovieFromWatchlist } = useContext(GlobalContext);
    return (
        <Row>
            <Col>
                <Card className='ml-3' style={{ flex: 1 }}>
                    <CardImg top height="300rem" width="100%" src={movie.Poster} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{movie.Title}</CardTitle>
                        <CardText>{movie.dateWatched}</CardText>
                        <CardText>Genre:{movie.Genre} </CardText>
                        <CardText>
                            <small className="text-muted">Rating: {movie.rating}/5</small>
                        </CardText>
                        <Button onClick={() => removeMovieFromWatchlist(movie.imdbID)}> X </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>

    );
};

export default MovieCard;
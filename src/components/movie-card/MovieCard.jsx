import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col
} from 'reactstrap';

const MovieCard = ({ movie }) => {
    return (
        <Row>
            <Col sm='4'>
                <Card className='ml-3'>
                    <CardImg top width="100%" src={movie.Poster} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{movie.Title}</CardTitle>
                        <CardText>{movie.dateWatched}</CardText>
                        <CardText>Genre:{movie.Genre} </CardText>
                        <CardText>
                            <small className="text-muted">Rating: {movie.rating}/5</small>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>

    );
};

export default MovieCard;
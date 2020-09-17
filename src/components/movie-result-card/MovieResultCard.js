import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col
} from 'reactstrap';
import fillerImage from '../../fixtures/images/movie-card.jpg';

const MovieResultCard = ({ movie, setName }) => {
    return (

        <Row clas>
            <Col sm='3'>
                <Card onClick={() => setName(movie.Title)}>
                    <CardImg top width="100%" src={movie.Poster !== 'N/A' ? movie.Poster : fillerImage} alt="movie poster" />
                    <CardBody>
                        <CardTitle>Title: {movie.Title}</CardTitle>
                        <CardText><small>Release Date: {movie.Released ? movie.Released : null}</small></CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>


    )
}

export default MovieResultCard;

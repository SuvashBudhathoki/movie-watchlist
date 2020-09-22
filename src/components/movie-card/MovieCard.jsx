import React from 'react';
import { Card, CardImg, Row, Col } from 'reactstrap';
import MovieModalCard from '../movie-modal-card/MovieModalCard';
import { getPoster } from '../../utils/utils';
import fillerImage from '../../fixtures/images/movie-card.jpg';

const MovieCard = ({ movie }) => {
    return (
        <Row>
            <Col>
                <Card>
                    <CardImg
                        top
                        height='300rem'
                        width='100%'
                        src={getPoster(movie.Poster, fillerImage)}
                        alt='movie poster'
                    />
                    <MovieModalCard movie={movie} />
                </Card>
            </Col>
        </Row>
    );
};

export default MovieCard;

import React from 'react';
import {
    Card, CardImg, Row, Col,
} from 'reactstrap';
import MovieModalCard from '../movie-modal/MovieModalCard';

const MovieCard = ({ movie }) => {
    return (
        <Row>
            <Col>
                <Card className='ml-3' style={{ flex: 1 }}>
                    <CardImg top height="300rem" width="100%" src={movie.Poster} alt="Card image cap" />

                    {/* Modal used to display movie details */}
                    <MovieModalCard movie={movie} />
                </Card>
            </Col>
        </Row>

    );
};

export default MovieCard;
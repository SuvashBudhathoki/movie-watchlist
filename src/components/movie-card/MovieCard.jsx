import React, { useState } from 'react';
import { Card, CardImg, Row, Col } from 'reactstrap';
import MovieModalCard from '../movie-detail-modal-card/MovieDetailModalCard';
import { getPoster } from '../../utils/utils';
import fillerImage from '../../fixtures/images/movie-card.jpg';

const MovieCard = ({ movie }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <Row>
            <Col>
                <Card style={{ cursor: 'pointer' }}>
                    <CardImg
                        top
                        height='300rem'
                        width='100%'
                        src={getPoster(movie.Poster, fillerImage)}
                        alt='movie poster'
                        onClick={toggle}

                    />
                    <MovieModalCard movie={movie} modal={modal} toggle={toggle} />
                </Card>
            </Col>
        </Row >
    );
};

export default MovieCard;

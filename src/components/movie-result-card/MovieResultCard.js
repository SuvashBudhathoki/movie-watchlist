import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col, Badge
} from 'reactstrap';
import fillerImage from '../../fixtures/images/movie-card.jpg';
import { getPoster } from '../../utils/utils';

const MovieResultCard = ({ movie, setName }) => {
    const { Poster, Title, Released } = movie;
    return (
        <><Row>
            <Col sm='3'>
                <Card onClick={() => setName(movie.Title)
                } >
                    <CardImg top width="100%" src={getPoster(Poster, fillerImage)} alt="movie poster" />
                    <CardBody>
                        <CardTitle><Badge color='info'>Title</Badge> {Title}</CardTitle>
                        <CardText><small><Badge color='info'>Title</Badge> {Released ? movie.Released : null}</small></CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row></>


    )
}

export default MovieResultCard;

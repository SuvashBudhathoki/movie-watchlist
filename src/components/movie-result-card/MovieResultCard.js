import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Row, Col
} from 'reactstrap';

const MovieResultCard = ({ movie }) => {
    return (

        <Row >
            <Col >

                <Card>
                    <CardImg top width="100%" src={movie.Poster} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{movie.Title}</CardTitle>
                        <CardText></CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>


    )
}

export default MovieResultCard;

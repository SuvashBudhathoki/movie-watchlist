import React, { useContext, useState, useEffect } from 'react';
import {
    Container, Jumbotron, Card, Badge, Row, Col
} from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';
import StarRatings from 'react-star-ratings';

const MovieStatistics = () => {
    const { watchlist } = useContext(GlobalContext);
    const [avg, setAvg] = useState(0)
    const [runtime, setRuntime] = useState(0)

    useEffect(() => {
        averageRating();
        totalRuntime();
        watchlist.map(movie => console.log(movie.Runtime.match(/(\d)+/)))
    }, [watchlist])

    const averageRating = () => setAvg(watchlist.length > 0 ? watchlist.reduce((acc, movie) => acc + movie.rating, 0) / watchlist.length : 0);

    const totalRuntime = () => {
        setRuntime(watchlist.reduce((acc, movie) => {
            let runtimeInNumber = movie.Runtime.match(/(\d)+/);

            return acc + Number(runtimeInNumber[0])
        }, 0));
    }
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <Card>
                        <Row>
                            <Col>
                                <Badge>Average Rating</Badge>
                                <StarRatings
                                    rating={avg}
                                    starDimension='25px'
                                    starSpacing='1px'
                                    starRatedColor='blue'
                                />
                            </Col>
                            <Col>
                                <Badge >Total Runtime</Badge>
                                {` ${runtime} mins`}

                            </Col>
                        </Row>
                    </Card>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default MovieStatistics;
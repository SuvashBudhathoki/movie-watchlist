import React, { useContext, useState, useEffect } from 'react';
import {
    Container, Jumbotron, Card, Badge, Row, Col
} from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';
import StarRatings from 'react-star-ratings';
import { averageRating, totalRuntime, month } from '../../utils/utils';

const MovieStatistics = () => {
    const { watchlist } = useContext(GlobalContext);
    const [avg, setAvg] = useState(0)
    const [runtime, setRuntime] = useState(0)

    useEffect(() => {
        averageRating(watchlist, setAvg);
        //totalRuntime(watchlist, setRuntime);
        totalRuntimePastMonth()
    }, [watchlist])

    const totalRuntimePastMonth = () => {
        let total = []
        watchlist.map(({ dateWatched, Runtime }) => {
            const x = new Date(dateWatched).getMonth() + 1;
            const y = new Date().getMonth() + 1;
            if (y - x === 1) {
                total.push(Runtime)
            }
        })
        totalRuntime(total, setRuntime)
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
                                <Badge >Total Runtime on {`${month[new Date().getMonth() - 1]}`} </Badge>
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
import React, { useContext, useState, useEffect } from 'react';
import {
    Container,
    Jumbotron,
    Badge,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';
import StarRatings from 'react-star-ratings';
import { averageRating, totalRuntime, month, getGenreAndRuntime, commonGenre } from '../../utils/utils';

const MovieStatistics = () => {
    const { watchlist } = useContext(GlobalContext);
    const [avg, setAvg] = useState(0);
    const [runtime, setRuntime] = useState(0);
    const [repeatedGenre, setRepeatedGenre] = useState('')

    useEffect(() => {
        averageRating(watchlist, setAvg);
        const [movieswatchedPastMonth, finalGenre] = getGenreAndRuntime(watchlist);
        totalRuntime(movieswatchedPastMonth, setRuntime);
        commonGenre(finalGenre, setRepeatedGenre)
    }, [watchlist]);

    return (
        <Jumbotron fluid>
            <h4 className='ml-3'>Movies Statistics</h4>
            <Container fluid>
                <ListGroup horizontal='md'>
                    <ListGroupItem>
                        Your Average Rating
            <Badge color='info' pill className='ml-2'>
                            <StarRatings
                                rating={avg}
                                starDimension='18px'
                                starSpacing='1px'
                                starRatedColor='blue'
                            />
                        </Badge>
                    </ListGroupItem>
                    <ListGroupItem>
                        Total Runtime on {`${month[new Date().getMonth() - 1]}`}
                        <Badge className='ml-2' color='info'>{`${runtime} mins`}</Badge>
                    </ListGroupItem>
                    <ListGroupItem>
                        Most Watched Genre
                        <Badge className='ml-2' color='info'>{`${repeatedGenre}`}</Badge>
                    </ListGroupItem>
                </ListGroup>
            </Container>
        </Jumbotron>
    );
};

export default MovieStatistics;

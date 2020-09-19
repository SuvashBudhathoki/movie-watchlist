import React, { useState, useContext } from 'react';
import {
    CardText, CardBody,
    CardTitle, Card, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import RatingsTable from '../ratings-table/RatingsTable';
import { GlobalContext } from '../../context/GlobalState';



const MovieModalCard = ({ movie }) => {
    const { removeMovieFromWatchlist } = useContext(GlobalContext);
    const { Title, Ratings } = movie;

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
    }
    const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>Click to view details..</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>{Title}</ModalHeader>
                <ModalBody>
                    <Card>
                        <CardBody>
                            <CardTitle><Badge color='success' className='mr-2'>Title </Badge>{` ${movie.Title}`}</CardTitle>
                            <CardText><Badge color='success' className='mr-2'>Genre </Badge>{` ${movie.Genre}`} </CardText>
                            <CardText><Badge color='success' className='mr-2'>Date watched </Badge>{` ${movie.dateWatched}`} </CardText>
                            <CardText >
                                <Badge color='success' className='mr-2'>Rating </Badge>
                                <StarRatings
                                    rating={movie.rating}
                                    starDimension='25px'
                                    starSpacing='1px'
                                    starRatedColor='blue'
                                />
                            </CardText>
                        </CardBody>
                    </Card>
                    <br />
                    <Button size='sm' outline color="info" onClick={toggleNested}>Ratings from site</Button>
                    <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                        <ModalHeader>Ratings</ModalHeader>
                        <ModalBody><RatingsTable ratings={Ratings} /></ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
                            <Button color="secondary" onClick={toggleAll}>All Done</Button>
                        </ModalFooter>
                    </Modal>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => removeMovieFromWatchlist(movie.imdbID)}>Remove from watchlist</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default MovieModalCard;
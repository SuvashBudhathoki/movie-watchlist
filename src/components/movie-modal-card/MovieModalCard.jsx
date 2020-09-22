import React, { useState, useContext } from 'react';
import {
    CardText,
    CardBody,
    CardTitle,
    Card,
    CardImg,
    Badge,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import fillerImage from '../../fixtures/images/movie-card.jpg';
import StarRatings from 'react-star-ratings';
import RatingsTable from '../ratings-table/RatingsTable';
import { getPoster } from '../../utils/utils';
import { GlobalContext } from '../../context/GlobalState';

const MovieModalCard = ({ movie }) => {
    const { Poster, Title, Genre, dateWatched, Ratings, rating, Runtime } = movie;

    const { removeMovieFromWatchlist } = useContext(GlobalContext);

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
    };

    return (
        <div>
            <Button color='danger' onClick={toggle} outline>
                Click to view details..
      </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{Title}</ModalHeader>
                <ModalBody>
                    <Card>
                        <CardImg
                            top
                            height='300rem'
                            width='100%'
                            src={getPoster(Poster, fillerImage)}
                            alt='Card image cap'
                        />
                        <hr />
                        <CardBody>
                            <CardTitle>
                                <Badge color='success' className='mr-2'>
                                    Title
                </Badge>
                                {` ${Title}`}
                            </CardTitle>
                            <hr />
                            <CardText>
                                <Badge color='success' className='mr-2'>
                                    Genre
                </Badge>
                                {` ${Genre}`}
                            </CardText>
                            <hr />
                            <CardText>
                                <Badge color='success' className='mr-2'>
                                    Runtime
                </Badge>
                                {` ${Runtime}`}
                            </CardText>
                            <hr />
                            <CardText>
                                <Badge color='success' className='mr-2'>
                                    Date watched
                </Badge>
                                {`${dateWatched}`}
                            </CardText>
                            <hr />
                            <CardText>
                                <Badge color='success' className='mr-2'>
                                    Rating{' '}
                                </Badge>
                                <StarRatings
                                    rating={rating}
                                    starDimension='25px'
                                    starSpacing='1px'
                                    starRatedColor='blue'
                                />
                            </CardText>
                        </CardBody>
                    </Card>
                    <br />
                    <Button size='sm' outline color='info' onClick={toggleNested}>
                        Ratings from site
          </Button>
                    <Modal
                        isOpen={nestedModal}
                        toggle={toggleNested}
                        onClosed={closeAll ? toggle : undefined}
                    >
                        <ModalHeader>Ratings</ModalHeader>
                        <ModalBody>
                            <RatingsTable ratings={Ratings} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color='primary' onClick={toggleNested}>
                                Done
              </Button>
                        </ModalFooter>
                    </Modal>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color='primary'
                        onClick={() => removeMovieFromWatchlist(movie.imdbID)}
                    >
                        Remove from watchlist
          </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default MovieModalCard;

import React, { useContext } from 'react';
import { Input, Label } from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';

const MovieFilters = () => {
    const { sortByDate, sortByAlphabets } = useContext(GlobalContext);

    const onSortChange = (e) =>
        e.target.value === 'date' ? sortByDate() : sortByAlphabets();

    return (
        <div className='d-flex flex-row-reverse'>
            <div className='p-1'>
                <Label className='ml-5'>Sort By</Label>
                <Input onChange={onSortChange} type='select' name='sortMovies'>
                    <option value='date'>Date Watched</option>
                    <option value='alphabet'>Movie Name</option>
                </Input>
            </div>
        </div>
    );
};

export default MovieFilters;

import React, { useContext } from 'react';
import { Input, Label } from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';

const MovieFilters = () => {
    const { sortByDate, sortByAlphabets } = useContext(GlobalContext);

    const onSortChange = e => e.target.value === 'date' ? sortByDate() : sortByAlphabets()

    return (
        <div className='mb-5 m-3'>
            <Label>Sort By</Label>
            <Input onChange={onSortChange} type="select" name="selectMulti" id="exampleSelectMulti" >
                <option value='date'>Date Watched</option>
                <option value='alphabet'>Movie Name</option>
            </Input>
        </div>
    )
}

export default MovieFilters;
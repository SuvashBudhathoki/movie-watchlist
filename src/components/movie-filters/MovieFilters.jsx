import React, { useContext, useEffect } from 'react';
import { Input } from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';

const MovieFilters = () => {
    const { sortByDate, sortByAlphabets } = useContext(GlobalContext);

    // useEffect(() => {

    // })
    const onSortChange = e => e.target.value === 'date' ? sortByDate() : sortByAlphabets()

    return (
        <div>
            <Input onChange={onSortChange} type="select" name="selectMulti" id="exampleSelectMulti" >
                <option value='date'>Date</option>
                <option value='alphabet'>Movie Name</option>
            </Input>
        </div>
    )
}

export default MovieFilters;
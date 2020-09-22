import React from 'react';
import { Table } from 'reactstrap';

const RatingsTable = ({ ratings }) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Source</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {ratings.map((rating, i) => (
                    <tr key={i}>
                        <td>{rating.Source}</td>
                        <td>{rating.Value}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default RatingsTable;

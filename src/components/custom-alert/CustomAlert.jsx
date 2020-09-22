import React from 'react';
import CONSTANTS from '../../constants/constants';
import { Alert } from 'reactstrap';

const CustomAlert = ({ title, type, setAlert }) => {
    setTimeout(() => {
        setAlert('');
    }, CONSTANTS.TIMEOUT_IN_SECONDS);
    return (
        <div>
            {type === 'success' ? (
                <Alert color='success'>{title} is added to the list</Alert>
            ) : (
                    <>
                        <Alert color='danger'>{title} is already in the list</Alert>
                    </>
                )}
        </div>
    );
};

export default CustomAlert;

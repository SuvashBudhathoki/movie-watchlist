import React from 'react';
import { Alert } from 'reactstrap';

const CustomAlert = ({ title, type, setAlert }) => {

    setTimeout(() => {
        setAlert('');
    }, 3000)

    return (
        <div>
            {type === 'success' ?
                (
                    <Alert color="success">
                        {title} is added to  the list
                    </Alert>
                )
                :
                (<>
                    <Alert color="danger">
                        {title} is already in the list
                    </Alert>

                </>)}

        </div>
    )
}

export default CustomAlert;
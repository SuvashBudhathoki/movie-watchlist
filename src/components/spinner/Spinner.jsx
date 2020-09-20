import React from 'react';
import spinnerGif from './spinner.gif';

const Spinner = () => {
    return (
        <div className="Spinner" style={{ textAlign: 'center ' }}>
            <img
                src={spinnerGif}
                alt="spinner"
                width="130px"
                height="130px"
            />
        </div>
    );
};

export default Spinner;

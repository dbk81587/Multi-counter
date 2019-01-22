import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ onCreate, onRemove}) => {
    return (
        <div className="Buttons">
            <div className="btn add" onClick={onCreate}>
                Create
            </div>
            <div className="btn remove" onClick={onRemove}>
                Remove
            </div>
        </div>
    );
};

Button.propTypes = {
    onCreate: PropTypes.func,
    onRmove: PropTypes.func
};

Button.defaultProps = {
    onCeate: () => console.warn('create not defined'),
    onRmove: () => console.warn('remove not defined')
};

export default Button;
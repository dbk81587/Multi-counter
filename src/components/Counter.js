import React from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

const Counter = ({ index, countNumber, onIncrement, onReset, onDecrement }) => {
    return (
            <div className="mt-5 counter border border-secondary rounded">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" className="title-input text-white counter-title bg-info" maxLength="25" placeholder="Title"/>
                </form>
                <div className="counter-display d-flex align-items-center bg-light text-secondary">                        
                    <div className="mx-auto display-1 font-weight-bold">{ countNumber }</div>
                </div>
                <div className="counter-panel d-flex flex-row">
                    <button className="btn btn-success w-100" onClick={ () => onIncrement(index) }>
                        <i className="fa fa-plus fa-2x"></i>
                    </button>
                    <button className="btn btn-warning w-80" onClick={ () => onReset(index) }>
                    <i class="fas fa-redo-alt fa-2x"></i>
                    </button>
                    <button className="btn btn-danger w-100" onClick={ () => onDecrement(index) }>
                        <i className="fa fa-minus fa-2x"></i>
                    </button>
                </div>
            </div>
    )
};

Counter.propTypes = {
    countNumber: PropTypes.number,
    onIncrement: PropTypes.func,
    onReset: PropTypes.func,
    onDecrement: PropTypes.func
};

Counter.defaultProps = {
    countNumber: 0,
    onIncrement: () => console.warn('onIncrement not defined'),
    onReset: () => console.warn('onReset not defined'),
    onDecrement: () => console.warn('onDecrement not defined')
}

export default Counter;
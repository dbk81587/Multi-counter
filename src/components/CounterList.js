import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

const CounterList = ({counters, onIncrement, onReset, onDecrement}) => {
    const counterList = counters.map(
        (counter, i) => (
            <Counter 
                key={i}
                index={i}
                {...counter}
                onIncrement={onIncrement}
                onReset={onReset}
                onDecrement={onDecrement}
            />
        )
    );

    return (
        <div className="d-flex flex-wrap">
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.shape({
        countNumber: PropTypes.number
    })),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onReset: PropTypes.func
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onReset: () => console.warn('onReset not defined')
};

export default CounterList;
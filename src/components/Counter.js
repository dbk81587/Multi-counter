import React from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

const Counter = ({ index, title, onModify, onCounterremove, countNumber, onIncrement, onReset, onDecrement }) => {
    let input;
    let form;
    let para
    const toggleModify = () => {
        if (form.className === 'd-none') {
            form.className = 'd-block';
            input.focus();
            input.value = title;
            para.className = 'd-none';
        }
        else {
            form.className = 'd-none';
            para.className = 'd-block';
        }
    }
    return (
            <div className="mt-5 counter border border-secondary rounded">
                <div className="title-input text-white counter-title bg-info d-flex justify-content-center">
                    <div><p className="d-block" ref={node => para = node}>{title}</p><form ref={node => form = node} className="d-none" onSubmit={ e=> {
                        e.preventDefault()
                        onModify(index, input.value)
                        toggleModify()
                        }}>
                        <input className="modify-input" maxlength="25" ref={node => input = node} /></form></div>
                    <div>
                        <button className="btn countermodify" onClick={ () => toggleModify() }><i class="fas fa-pen"></i></button>
                        <button className="btn counterremove" onClick={ () => onCounterremove(index) }><i class="far fa-trash-alt"></i></button>
                    </div>
                </div>
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
    title: PropTypes.string,
    onModify: PropTypes.func,
    onCounterremove: PropTypes.func,
    onIncrement: PropTypes.func,
    onReset: PropTypes.func,
    onDecrement: PropTypes.func
};

Counter.defaultProps = {
    countNumber: 0,
    title: '',
    onModify: () => console.warn('onModify not defined'),
    onCounterremove: () => console.warn('onCounterremove not defined'),
    onIncrement: () => console.warn('onIncrement not defined'),
    onReset: () => console.warn('onReset not defined'),
    onDecrement: () => console.warn('onDecrement not defined')
}

export default Counter;
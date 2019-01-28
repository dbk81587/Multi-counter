import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    counters: state.counters
});

const mapDispatchToProps = (dispatch) => ({
    onModify: (index, title) => dispatch(actions.modify(index, title)),
    onCounterremove: (index) => dispatch(actions.counterremove(index)),
    onIncrement: (index) => dispatch(actions.increment(index)),
    onReset: (index) => dispatch(actions.reset(index)),
    onDecrement: (index) => dispatch(actions.decrement(index))
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList);

export default CounterContainer;
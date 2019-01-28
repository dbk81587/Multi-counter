import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import '../components/CreateForm.css';

const CreateForm = ({ dispatch }) => {
    let input;
  
    return (
      <div className="d-flex justify-content-center">
        <form class="form-inline my-2 my-lg-0" onSubmit={e => {
          e.preventDefault()
          dispatch(actions.create(input.value))
          input.value = ''
        }}>
          <input class="form-control mr-sm-2" placeholder="Title" ref={node => input = node} />
          <button type="submit" class="btn btn-outline-success my-2 my-sm-0">
            Add
          </button>
        </form>
      </div>
    )
  }


export default connect()(CreateForm);
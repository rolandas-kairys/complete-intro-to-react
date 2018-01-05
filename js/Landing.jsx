// @flow


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { object } from 'prop-types';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {
  props: { searchTerm: string, handleSearchTermChange: Function };
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type="text" placeholder="Search" />
        <Link to="/search" >or Browse All</Link>
      </div>
    );
  }
}





const mapStateToProps = (state) => ({ searchTerm: state.searchTerm }); // arrow function returning object

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(Landing);
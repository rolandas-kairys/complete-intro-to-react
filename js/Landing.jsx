// @flow


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { object } from 'prop-types';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {
  static contextTypes = {
    history: object
  };

  props: { searchTerm: string, handleSearchTermChange: Function };
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type="text" placeholder="Search" />
        </form>
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
// @flow


import React, { Component } from 'react';
import styled from 'styled-components'; // -flow: don't check this (lib) 
import { Link } from 'react-router-dom';


const Wrapper = styled(Link) `
  width: 25%;
  border: 2px solid #333;
  border-radius: 25px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;




class ShowCard extends Component {

  shouldComponentUpdate() {
    return false;          // once it is rendered - do not update
  }

  props: { show: { poster: string, title: string, year: string, description: string, imdbID: string } }

  render() {
    return (
      <Wrapper to={`/details/${this.props.show.imdbID}`} >
        <Image src={`/public/img/posters/${this.props.show.poster}`} alt={`${this.props.show.title} Show Poster`} />
        <div>
          <h3>{this.props.show.title}</h3>
          <h4>({this.props.show.year})</h4>
          <p>{this.props.show.description}</p>
        </div>
      </Wrapper>
    );
  }
}



export default ShowCard;
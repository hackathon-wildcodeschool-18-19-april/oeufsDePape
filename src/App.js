import React, { Component } from 'react';
import Homepage from './OeufsDePape.jpg'
import axios from "axios";
import Fetch from "./Fetch"
import { Container, Row, Col } from 'reactstrap';
import './App.css';


export default class Card extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
      data: [],
      image: " ",
      isLoading: false,
      error: false
      }
    }
  clicked(framework){
    this.props.click(framework)
  }

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   axios
  //     .get("http://easteregg.wildcodeschool.fr/api/eggs/random")
  //     .then(result =>
  //       this.setState({
  //         image: result.data.image,
  //         isLoading: false
  //       })
  //     )
  //     .catch(error =>
  //       this.setState({
  //         error,
  //         isLoading: false
  //       } )
  //     );
  // }

  getRandomEgg() {
    this.setState({ isLoading: true });
    axios
      .get("http://easteregg.wildcodeschool.fr/api/eggs/random")
      .then(result =>
        this.setState({
          image: result.data.image,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        } )
      );
      return this.state.image
  };
  


    render() {
      return (
<>
<img src={Homepage} alt='Oeufs de Pape'style={{width:'100%'}}/>
        <Container>

        <Row>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
        </Row>
        <Row>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
        </Row>
        <Row>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
        </Row>
        <Row>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
          <Col><Fetch /></Col>
        </Row>
  
      </Container>
</>
      
    )
  }
}



import React, { Component } from 'react';
import logo from './OeufsDePape.jpg'
import axios from "axios";
import Fetch from "./Fetch"


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <img src={logo} alt='Oeufs de Pape'style={{width:'100%'}}/>
//       </div>
//     );
//   }
// }

class Card extends React.Component {
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
  

  render(){
    return (
<>
      
      <div>
    
      
      <Fetch />
      <Fetch />
      <Fetch />
      <Fetch />
      <Fetch />
      <Fetch />
      <Fetch />
      <Fetch />
      <Fetch />
      

        </div>
        </>
    )
  }
}

export default Card;

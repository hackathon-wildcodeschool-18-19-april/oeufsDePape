
import React from 'react';
import Axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Fetch extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isLoading: false,
			isSuccess : false,
			isError: false,
			image: "",
			name:""
		}
		// debugger;
	}

		componentDidMount(){
			const requestUrl = "http://easteregg.wildcodeschool.fr/api/eggs/random";
			// debugger;
			this.setState({
				isLoading: true,
				isSuccess: false,
				isError: false,
				image: "",
				name: ""
			});
			Axios
			.get(requestUrl)
			.then(result =>{
				// debugger;
				this.setState({
					isLoading: false,
					isSuccess: true,
					isError: false,
					image: result.data.image,
					name: result.data.name
				})
			})
			.catch(error =>
				this.setState({
					isLoading: false,
					isSuccess: false,
					isError: true,
					image: "",
					name: ""
				})
			);
		}


render(){
	return (

<div>
<Card>
<img src={this.state.image} alt='Oeufs de Pape'style={{width:'20%'}}/>
	<CardBody>
		<CardTitle>{this.state.name}</CardTitle>
		<Button>Button</Button>
	</CardBody>
</Card>
</div>
			
	)
}
}


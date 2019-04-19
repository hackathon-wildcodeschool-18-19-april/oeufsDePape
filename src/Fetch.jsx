import React from "react";
import Axios from "axios";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Collapse,
	Jumbotron,
	Row,
	Col
} from "reactstrap";

export default class Fetch extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			collapse: false,
			isLoading: false,
			isSuccess: false,
			isError: false,
			image: "",
			name: "",
			color: "",
			rarity: ""
		};
		// debugger;
	}

	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}

	componentDidMount() {
		const requestUrl = "http://easteregg.wildcodeschool.fr/api/eggs/random";
		// debugger;
		this.setState({
			isLoading: true,
			isSuccess: false,
			isError: false,
			image: "",
			name: "",
			color: ""
		});
		Axios.get(requestUrl)
			.then(result => {
				// debugger;
				this.setState({
					isLoading: false,
					isSuccess: true,
					isError: false,
					image: result.data.image,
					name: result.data.name,
					color: result.data.color,
					rarity: result.data.rarity
				});
			})
			.catch(error =>
				this.setState({
					isLoading: false,
					isSuccess: false,
					isError: true,
					image: "",
					name: "",
					color: ""
				})
			);
	}

	render() {
		return (
			<div>
				<Card>
					<CardImg
						top
						width="10%"
						src={this.state.image}
						alt="Card image cap"
						style={{ backgroundColor: this.state.color, width: "100%" }} 
						top width="100%" />

					
					<CardBody style={{ width: "100%", height: "100%" }} >
						<CardTitle>{this.state.name}</CardTitle>
						<CardSubtitle>{this.state.rarity}</CardSubtitle>
						{/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
						{/* <Button>Button</Button> */}
					</CardBody>
				</Card>
			</div>
		);
	}
}

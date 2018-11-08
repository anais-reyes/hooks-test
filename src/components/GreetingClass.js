import React, { Component } from 'react';

const style = {
	margin: '30px',
	backgroundColor: 'violet',
	padding: '30px',
	border: '1px solid black',
};

class GreetingClass extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Taco',
			count: 0,
			width: window.innerWidth,
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value,
		});
	}

	handleClick() {
		this.setState({
			count: this.state.count + 1,
		});
	}

	componentDidMount() {
		document.title = this.state.name + ' ' + this.state.count;
	}

	componentDidUpdate() {
		document.title = this.state.name + ' ' + this.state.count;
	}

	render() {
		return (
			<section style={style}>
				<h1>Class component</h1>
				<div>
					<p>{this.state.name}</p>
					<input value={this.state.name} onChange={this.handleNameChange} />
				</div>
				<div>
					<button onClick={this.handleClick}>{this.state.count}</button>
				</div>
			</section>
		);
	}
}

export default GreetingClass;

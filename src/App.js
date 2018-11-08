import React, { Component } from 'react';
import GreetingHook from './components/GreetingHook';
import GreetingClass from './components/GreetingClass';

const style = {
	display: 'flex',
	justifyContent: 'space-around',
};

class App extends Component {
	render() {
		return (
			<div style={style}>
				<GreetingHook />
				<GreetingClass />
			</div>
		);
	}
}

export default App;

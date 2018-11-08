import React, { useState, useEffect } from 'react';

const style = {
	margin: '30px',
	backgroundColor: 'salmon',
	padding: '30px',
	border: '1px solid black',
};

export default function GreetingHook() {
	const [name, setName] = useState('Taco');
	const [count, setCount] = useState(0);

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleClick() {
		setCount(count + 1);
	}

	useEffect(() => {
		document.title = name + ' ' + count;
	});

	return (
		<section style={style}>
			<h1>Hook Component</h1>
			<div>
				<p>{name}</p>
				<input value={name} onChange={handleNameChange} />
			</div>
			<div>
				<button onClick={handleClick}>{count}</button>
			</div>
		</section>
	);
}

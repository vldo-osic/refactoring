import React, { useState, useEffect } from 'react';

const Button = (props) => {
	return (
		<div
			style={{ border: '1px solid black', width: '150px' }}
			onClick={() => props.onClick()}
		>
			{props.title}
		</div>
	);
};

const User = (props) => {
	return <div>{props.age}</div>;
};

export default () => {
	const [count, setCount] = useState(0);
	const [users, setUsers] = useState([]);
	const [remainTime, setRemainTime] = useState(15);

	const handleClick = () => {
		setCount(count + 1);
		setUsers([
			...users,
			{
				id: 1 + Math.floor(Math.random() * 10),
				age: 20 + Math.random() * 40,
			},
		]);
	};

	const handleRemove = () => {
		setCount(0);
		setUsers([]);
	};

	useEffect(() => {
		setTimeout(() => {
			setRemainTime(remainTime - 0.1);
		}, 100);
	}, [remainTime, setRemainTime]);

	const ageSum = users.reduce((sum, user) => sum + user.age, 0);

	if (remainTime <= 0) {
		return (
			<div>
				<div>Count: {count}</div>
				<div>Age sum: {Math.round(ageSum)}</div>
				{users.map((value) => (
					<User key={value.id} age={value.age} />
				))}
			</div>
		);
	}

	return (
		<div>
			<div>Remain time: {remainTime.toFixed(1)} seconds</div>
			<Button onClick={handleClick} title="Add random user" />
			<div>Count: {count}</div>
			<div>Age sum: {Math.round(ageSum)}</div>
			{users.map((value) => (
				<User key={value.id} age={value.age} />
			))}
			{count > 0 && (
				<Button
					onClick={handleRemove}
					title="Remove all"
					className="remove-button"
				/>
			)}
		</div>
	);
};

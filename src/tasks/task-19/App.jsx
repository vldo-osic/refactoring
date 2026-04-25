import { useState, useEffect, useCallback, useRef, memo } from 'react';

const Button = memo((props) => {
	const { title, onClick } = props;
	return (
		<button
			style={{ border: '1px solid black', width: '150px' }}
			onClick={() => onClick()}
			type='button'
		>
			{title}
		</button>
	);
});

const User = (props) => {
	return <p>{props.age}</p>;
};

const UsersList = (props) => {
	const { users } = props;

	return (
		<>
			<p>Count: {users.length}</p>
			<p>Age sum: {Math.round(ageSum(users))}</p>
			<ul>
				{users.map(({ id, age }) => (
					<li key={id}>
						<User age={age} />
					</li>
				))}
			</ul>
		</>
	)
}

const INIT_REMAIN_TIME = 15;
const INIT_USERS = [];

const ageSum = (users) => users.reduce((sum, user) => sum + user.age, 0);

export default () => {
	const [users, setUsers] = useState(INIT_USERS);
	const [remainTime, setRemainTime] = useState(INIT_REMAIN_TIME);

	const handleClick = useCallback(() => {
		setUsers((prev) => [
			...prev,
			{
				id: String(1 + Math.random() * 10),
				age: 20 + Math.floor(Math.random() * 40),
			},
		]);
	});

	const handleRemove = useCallback(() => {
		setUsers(INIT_USERS);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainTime((prev) => prev -= 0.1);
		}, 100);

		return () => {
			clearInterval(interval);
		}
	}, []);

	if (remainTime <= 0) {
		return <UsersList users={users}/>
	}

	return (
		<div>
			<p>Remain time: {remainTime.toFixed(1)} seconds</p>
			<Button onClick={handleClick} title="Add random user" />
			<UsersList users={users}/>
			{users.length > 0 ? (
				<Button
					onClick={handleRemove}
					title="Remove all"
					className="remove-button"
				/>
			) : null}
		</div>
	);
};

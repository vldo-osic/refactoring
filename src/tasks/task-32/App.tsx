import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchUser() {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users/$(userId)',
				);
				if (!response.ok) {
					throw new Error('Error fetching user');
				}
				const data = await response.json();
				setUser(data);
			} catch (err) {
				setError(true);
			}
		}

		fetchUser();
	}, []);

	useEffect(() => {
		return () => {
			setUser(null);
		};
	}, []);

	return (
		<div>
			<h1>User Profile</h1>
			{error && <p>Error loading user data.</p>}
			<p>Name: {user.name}</p>
			<p>Email: {user.email}</p>
		</div>
	);
}

export default UserProfile;

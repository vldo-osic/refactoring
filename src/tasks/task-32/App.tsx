import { memo, useEffect, useState } from 'react';

type User = {
	name: string;
	email: string;
	id: string;
};

interface UserProfileProps {
	userId: string;
}
const UserProfile = memo(({ userId }: UserProfileProps) => {
	const [error, setError] = useState(false);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const loadUser = async () => {
			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/users/${userId}`,
				);
				if (!response.ok) {
					throw new Error('Error fetching user');
				}
				setUser(await response.json());
			} catch (_err) {
				setError(true);
			}
		};

		loadUser();
	}, [userId]);

	if (error) {
		return <p>Error loading user data.</p>;
	}

	return (
		<div>
			<h1>User Profile</h1>
			<p>Name: {user?.name}</p>
			<p>Email: {user?.email}</p>
		</div>
	);
});

export default UserProfile;

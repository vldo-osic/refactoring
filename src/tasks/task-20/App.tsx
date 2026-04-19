import React, { useEffect, useState } from 'react';
import './index.css';
import PostComponent from './Post';

export default function App() {
	const posts_list = [
		{
			id: '1',
			name: 'siberia can code ㈠',
			imggesrc: 'https://avatars.githubusercontent.com/u/45297354?v=4',
			text: 'first post',
		},
		{
			id: '2',
			name: 'theo',
			imggesrc: 'https://avatars.githubusercontent.com/u/6751787?v=4',
			text: 'second post',
		},
		{
			id: '3',
			name: 'dan abramov',
			imggesrc: 'https://avatars.githubusercontent.com/u/810438?v=4',
			text: 'third post',
		},
	];

	const [selectedId, setPostId] = useState(0);
	const [Post, setSelectedPost] = useState(posts_list[0]);
	console.log('@', selectedId);

	useEffect(() => {
		setSelectedPost(posts_list[selectedId]);
	}, [selectedId]);

	return (
		<div className="App">
			<div>selected user:</div>
			<div className="user">
				<img
					className="avatar"
					src={Post.imggesrc}
					style={{ width: '30px' }}
				/>
				{Post.name}
			</div>
			<br />
			<br />
			<br />
			<div>posts_list</div>
			{posts_list.length
				? posts_list.map((el, index) => (
						<PostComponent
							data={el}
							onClick={() => setPostId(index)}
						/>
					))
				: []}
		</div>
	);
}

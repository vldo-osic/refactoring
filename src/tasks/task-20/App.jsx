import { memo, useCallback, useEffect, useState } from 'react';

// import './index.css';

const POSTS_LIST = [
	{
		id: '1',
		name: 'siberia can code ㈠',
		imagesrc: 'https://avatars.githubusercontent.com/u/45297354?v=4',
		text: 'first post',
	},
	{
		id: '2',
		name: 'theo',
		imagesrc: 'https://avatars.githubusercontent.com/u/6751787?v=4',
		text: 'second post',
	},
	{
		id: '3',
		name: 'dan abramov',
		imagesrc: 'https://avatars.githubusercontent.com/u/810438?v=4',
		text: 'third post',
	},
];

const SelectedUser = (props) => {
	const { imagesrc, name } = props;

	return (
		<div className="user">
			<img
				alt="Аватар"
				className="avatar"
				src={imagesrc}
				style={{ width: '30px' }}
			/>
			{name}
		</div>
	);
};

const PostComponent = memo((props) => {
	const { data, onClick } = props;
	return (
		<>
			<p>{JSON.stringify(data)}</p>
			<button onClick={() => onClick(data.id)} type="button">
				select
			</button>
		</>
	);
});

const PostList = (props) => {
	const { handleSelect } = props;

	return (
		<ul>
			{POSTS_LIST.map((data) => (
				<li key={data.id}>
					<PostComponent data={data} onClick={handleSelect} />
				</li>
			))}
		</ul>
	);
};

export default function App() {
	const [selectedPost, setSelectedPost] = useState(POSTS_LIST[0]);

	useEffect(() => {
		console.log('@', selectedPost?.id);
	}, [selectedPost]);

	const handleSelect = useCallback((newId) => {
		setSelectedPost(POSTS_LIST.find(({ id }) => id === newId));
	}, []);

	return (
		<div className="App">
			<p>selected user:</p>
			<SelectedUser
				imagesrc={selectedPost?.imagesrc}
				name={selectedPost?.name}
			/>
			<br />
			<br />
			<br />
			<p>posts_list</p>
			<PostList handleSelect={handleSelect} />
		</div>
	);
}

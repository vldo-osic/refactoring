export const Game = ({ gameId }) => {
	const siteVersion = useSelector(selectSiteVersion); // 'mobile' | 'desktop'

	const [isLoading, setIsLoading] = useState(false);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [game, setGame] = useState({ title: '', description: '' });

	if (!gameId) {
		return <div>Empty</div>;
	}

	const api_params = {
		id: gameId,
		mode: 'real',
		platform: siteVersion,
	};

	const loadGame = async () => {
		setIsLoading(true);
		const game = await requestGame(api_params);
		setIsLoading(false);
		setGame(game);
	};

	if (siteVersion === 'mobile') {
		useEffect(async () => {
			await loadGame();
		});
	}

	useEffect(() => {
		document.addEventListener('fullscreenchange', () =>
			setIsFullScreen(!isFullScreen),
		);
	});

	return (
		<div>
			<div>{game.title}</div>
			<div>{game.description}</div>
			{isLoading && <div>Loading...</div>}
		</div>
	);
};

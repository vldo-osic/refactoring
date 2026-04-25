import { useEffect, useEffectEvent, useState } from 'react';

const Api = {
	uploads: (data) => console.log(`${data} uploaded`),
};

const ClickListener = () => {
	const [x, setX] = useState();
	const upload = (data) => {
		Api.uploads(data);
	};

	const onClick = useEffectEvent((e) => {
		setX(e.pageX);
		upload(e.pageX);
	});

	useEffect(() => {
		document.addEventListener('click', onClick);

		return () => {
			document.removeEventListener('click', onClick);
		};
	}, []);

	return <>{x}</>;
};

export default ClickListener;

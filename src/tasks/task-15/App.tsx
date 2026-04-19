import React from 'react';

const Api = {
	uploads: (data) => console.log(data + ' uploaded'),
};

const ClickListener = () => {
	const [x, setX] = React.useState();
	const upload = React.useCallback(() => {
		Api.uploads(x);
	}, []);

	React.useEffect(() => {
		document.addEventListener('click', (e) => {
			setX(e.pageX);
			upload();
		});
	});

	return <>{x}</>;
};

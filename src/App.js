import './App.css';

import React from 'react';
import ContentContainer from './components/Content/ContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
	return (
		<div className="wrapper">
			<HeaderContainer />
			<ContentContainer />
		</div>
	);
};

export default App;

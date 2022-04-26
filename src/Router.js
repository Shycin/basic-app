import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

import App from './App';
import Home from './View/Home';

export default function RouteList() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/app" element={<App />} />
			</Routes>
		</Router>
	);
}

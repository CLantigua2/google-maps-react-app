import React, { Component } from 'react';
import MapContainer from './components/MapContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MapContainer apiKey="AIzaSyA6-ZG12kz6OX5EPHDCda9AaKefdHJAVLo" />
			</div>
		);
	}
}

export default App;

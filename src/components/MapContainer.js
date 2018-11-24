import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
	width: '900px',
	height: '600px'
};

export class MapContainer extends React.Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	render() {
		return (
			<Map
				google={this.props.google}
				zoom={14}
				style={mapStyles}
				initialCenter={{
					lat: 59.955413,
					lng: 30.337844
				}}
			/>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.SECRET_KEY
})(MapContainer);

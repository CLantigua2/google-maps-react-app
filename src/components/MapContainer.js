import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
	width: '900px',
	height: '600px'
};

export class MapContainer extends React.Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selecetedPlace: {}
	};

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInforWindow: true
		});
	};

	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	render() {
		return (
			<Map google={this.props.google} zoom={14} style={mapStyles}>
				<Marker onClick={this.props.google} name={'Current location'} />
				<InfoWindow
					onOpen={this.windowHasOpened}
					onClose={this.windowHasClosed}
					visible={this.state.showingInfoWindow}
				>
					<div>
						<h1>{this.state.selectedPlace}</h1>
					</div>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper((props) => ({
	apiKey: props.apiKey
}))(MapContainer);

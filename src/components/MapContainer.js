import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

export class MapContainer extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {}
	};

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	onClose = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	render() {
		return (
			<Map google={this.props.google} zoom={14}>
				<Marker onClick={this.onMarkerClick} name={'Current location'} />

				<InfoWindow onClose={this.onInfoWindowClose}>
					<div>
						<h1>{this.state.selectedPlace.name}</h1>
					</div>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper((props) => ({
	apiKey: props.apiKey
}))(MapContainer);

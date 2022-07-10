/** @format */

import React from 'react';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	CircleMarker,
	useMap,
} from 'react-leaflet';

import '../../styles/MapLeaflet.css';

function MapLeaflet() {
	const redOptions = { color: 'red' };

	return (
		<MapContainer
			className="MapLeaflet"
			center={[51.505, -0.09]}
			zoom={13}
			scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
				<CircleMarker
					center={[51.51, -0.12]}
					pathOptions={redOptions}
					radius={2}>
					<Popup>Popup in CircleMarker</Popup>
				</CircleMarker>
			</Marker>
		</MapContainer>
	);
}

export default MapLeaflet;

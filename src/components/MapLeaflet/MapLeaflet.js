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
import Earthquakes from '../Earthquakes/Earthquakes';

function MapLeaflet(props) {
	const redOptions = { color: 'red' };
	// const date = new Date(props.earthQuakes[0].properties.time);
	// console.log(date.toUTCString());

	return (
		<MapContainer
			className="MapLeaflet"
			center={[51.505, -0.09]}
			zoom={3}
			scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{props.earthQuakes.map((eq, idx, arr) => {
				const date = new Date(eq.properties.time);
				return (
					<CircleMarker
						key={idx}
						center={[eq.geometry.coordinates[1], eq.geometry.coordinates[0]]}
						pathOptions={redOptions}
						radius={eq.geometry.coordinates[2] / 10}>
						<Popup>
							<div className="MapLeaflet-Popup-Content">
								<p>Place: {eq.properties.place}</p>
								<p>Magnitude: {eq.properties.mag}</p>
								<p>Type: {eq.properties.type}</p>
								<p>Occurrence Date: {date.toUTCString()}</p>
							</div>
						</Popup>
					</CircleMarker>
				);
			})}
			<CircleMarker
				center={[
					props.earthQuakes[0].geometry.coordinates[1],
					props.earthQuakes[0].geometry.coordinates[0],
				]}
				pathOptions={redOptions}
				radius={5}>
				<Popup>Popup in CircleMarker</Popup>
			</CircleMarker>
			;
		</MapContainer>
	);
}

export default MapLeaflet;

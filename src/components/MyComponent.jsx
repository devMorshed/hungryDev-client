import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function MapComponent() {
	const position = [23.83, 90.25];

	return (
		<MapContainer
			className="w-full h-96 ms-auto overflow-hidden shadow-xl  rounded-xl"
			center={[23.81, 90.41]}
			zoom={13}
			scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					This is Meh! 
				</Popup>
			</Marker>
		</MapContainer>
	);
}

export default MapComponent;

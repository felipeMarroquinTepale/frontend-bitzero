import React from 'react'
import { MapContainer,CircleMarker, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaflet from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon= Leaflet.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: icon,
    shadowUrl: iconShadow
});

Leaflet.Marker.prototype.options.icon= DefaultIcon;

class Mapa extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            lat:16.776702987845475,
            lng:-93.13179594460483,
            zoom:20,
            markerPoint:{
                x:320,
                y:192
            }
        };
        this.refMap= React.createRef();
    }


    render() {
        const position=[this.state.lat, this.state.lng];
        return (
            <MapContainer
                style={{height: '800px'}}
                refs={this.refMap}
                center={position}
                zoom={this.state.zoom}
                scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position} draggable="true" pane="popupPane">

                </Marker>
                <CircleMarker center={position}
                              fillColor='red'
                              radius={20}
                              fillOpacity={0.5}
                              stroke={true}>
                    <Popup>
                        <span>BitZero Technologies<br/></span>
                    </Popup>
                </CircleMarker>

            </MapContainer>
        )
    }
}
export default Mapa;
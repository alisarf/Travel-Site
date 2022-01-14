import React, {useState} from "react";
import ReactMapGL, {Marker} from 'react-map-gl';

import content from "../assets/content/content.json"
import pin from "../assets/images/icons/pin.png"
import { Paper } from "@mui/material";

//INPUT: location variable
//OUTPUT: Map of location with pin

//Brewery Finder
const mapboxapi = {
  base: 'https://api.openbrewerydb.org/breweries?by_city='
}

const MapApi = (props) => {
    const latitude = content[props.location].location.latitude;
    const longitude = content[props.location].location.longitude;
    const [viewport, setViewport] = useState({
        latitude: latitude,
        longitude: longitude,
        width: "20vw",
        height: "180px",
        zoom: 10
      });


    return (
        <Paper>
            <ReactMapGL className = 'rounded-md'         
            {...viewport}
            mapboxApiAccessToken={"pk.eyJ1IjoiYWxpZmFyZXNib3Vsb3MiLCJhIjoiY2t3NWs5aWdzNmUxZTJubzB0dXhuMjJjZyJ9.gF9Yte_ZD6xwUJKf8oyyyg"}
            mapStyle = 'mapbox://styles/alifaresboulos/cktfya9h13qjl18s2pkfgiyx4'
            onViewportChange={viewport => {
            setViewport(viewport);
            }}>
                <Marker latitude={latitude} longitude={longitude} offsetLeft={-20} offsetTop={-10}>
                    <img src={pin} />
                </Marker>
            </ReactMapGL>
        </Paper>
    )
}
export default MapApi;
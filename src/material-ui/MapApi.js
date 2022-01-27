import React, {useState, useEffect} from "react";
import ReactMapGL, {Marker} from 'react-map-gl';

import content from "../assets/content/content.json"
import pin from "../assets/images/icons/pin.png"
import { Paper } from "@mui/material";
import { Google } from "@mui/icons-material";

//INPUT: location variable
//OUTPUT: Map of location with pin

const MapApi = (props) => {

    const [latitude, setLatitude] = useState(props.cords[0]);
    const [longitude, setlLongitude ] = useState(props.cords[1]);

    const setCoords = () => {
        setLatitude(props.cords[0])
        setlLongitude(props.cords[1])
        
    }


    const [viewport, setViewport] = useState({
        latitude: latitude,
        longitude: longitude,
        width: "20vw",
        height: "180px",
        zoom: 10
      });

    //change coords when state changes in weather hook
    useEffect(() => {
        setCoords();
    }, [props.cords]);

    //change viewport when coords change to show current state of viewport
    useEffect(() => {
        setViewport({
            latitude: latitude,
            longitude: longitude,
            width: "20vw",
            height: "180px",
            zoom: 10})
    }, [latitude])

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
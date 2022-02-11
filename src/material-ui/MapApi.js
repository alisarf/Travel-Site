import React, {useState, useEffect} from "react";
import ReactMapGL, {Marker} from 'react-map-gl';
import pin from "../assets/images/icons/pin.png"
import { Paper } from "@mui/material";
import 'mapbox-gl/dist/mapbox-gl.css';


import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it

//TO PREVENT BUG IN MAP API
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;


//INPUT: props cordinate state
//OUTPUT: Map of location with pin

const MapApi = (props) => {

    const [latitude, setLatitude] = useState(props.cords[0]);
    const [longitude, setlLongitude ] = useState(props.cords[1]);

    //Set Lat/Lon from props that are dependent on Weather.js component
    const setCoords = () => {
        setLatitude(props.cords[0])
        setlLongitude(props.cords[1])
    }
    //Set initial viewport
    const [viewport, setViewport] = useState({
        latitude: latitude,
        longitude: longitude,
        width: "20vw",
        height: "180px",
        zoom: 10
      });

    //change coords when state changes in weather component
    useEffect(() => {
        setCoords();
    }, [props.cords]);

    //change viewport when coords change to show current state of viewport
    useEffect(() => {
        setViewport({
            latitude: latitude,
            longitude: longitude,
            width: "auto",
            height: "50vw",
            zoom: 10})
    }, [latitude, longitude])

    return (
        <Paper className="w-3/5">
            <ReactMapGL className = 'rounded-md'         
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX}
                mapStyle = 'mapbox://styles/alifaresboulos/cktfya9h13qjl18s2pkfgiyx4'
                onViewportChange={viewport => {
                setViewport(viewport);
            }}>
                <Marker 
                    latitude={latitude}
                    longitude={longitude}
                    offsetLeft={-20} 
                    offsetTop={-10}>
                    <img src={pin} />
                </Marker>
            </ReactMapGL>
        </Paper>
    )}
export default MapApi;
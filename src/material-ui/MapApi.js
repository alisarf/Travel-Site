import React, {useState, useEffect} from "react";
import ReactMapGL, {Marker} from 'react-map-gl';
import pin from "../assets/images/icons/pin.png"
import { Paper } from "@mui/material";
import 'mapbox-gl/dist/mapbox-gl.css';


import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
import viewportMercatorProject from "viewport-mercator-project";

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
        zoom : 10
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
            zoom : 9
        })
    }, [latitude, longitude])

    return (
        <Paper className="w-full h-auto overflow-hidden lg:w-3/5" sx={{minHeight: '30vh', borderRadius: '15px'}}>
            <ReactMapGL className = ' overflow-hidden rounded-md Min-H-30VH'       
                {...viewport}
                scrollZoom={false}
                width = "auto"
                height = "100%"
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
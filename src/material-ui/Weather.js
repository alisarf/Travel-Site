import React, {useState , useEffect} from "react";
import { Card } from "@mui/material";

const Weather = (props) => {
    const [weather, setWeather] = useState({});
    const api = {
        key: "3a2b308bcf33b99a8500227f26bafdeb",
        base: "http://api.openweathermap.org/data/2.5/"
    }
    const weathericon = {
        base: "http://openweathermap.org/img/wn/",
        end: "@2x.png"
    }

    //const icon = 'http://openweathermap.org/img/wn/10d@2x.png'
    const query = props.location;
    const search = () => {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json()) //format to json result as promise
            .then(result => {
                setWeather(result) //set result as weather object
                //props.setCords([weather.,])
                props.setCords([result.coord.lat, result.coord.lon])
                console.log(props.cords)
            });
    }

    useEffect(() => {
        search();
    }, [props.location]);        // eslint-disable-line react-hooks/exhaustive-deps



    return (
        <Card className = 'w-fit'>
            {(typeof weather.main != "undefined") ? (
            <section className="flex flex-row gap-8 justify-evenly items-center Bg_lt_teal py-8 px-8">
                <div>
                    <div className="text-xl font-bold Font_dk_teal"> {weather.weather[0].main} </div>
                    <div className="text-5xl font-bold Font_dk_teal"> {Math.round(weather.main.temp)}°C</div>
                    <div className=" text-white Font_dk_slate tracking-widest capitalize mt-4">{weather.name}</div>
                </div>
                <div className="Circular_box">
                    <img src={weathericon.base + weather.weather[0].icon + weathericon.end} className="Weather_icon"></img>
                    
                </div>
                
            </section>
            ):('')}
        </Card>
    )
}

export default Weather;


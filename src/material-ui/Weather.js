import React, {useState , useEffect} from "react";

const Weather = (props) => {
    const [weather, setWeather] = useState({});
    const api = {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        base: "https://api.openweathermap.org/data/2.5/"
    }
    const weathericon = {
        base: "https://openweathermap.org/img/wn/",
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
            });
    }

    useEffect(() => {
        search();
    }, [props.location]);        // eslint-disable-line react-hooks/exhaustive-deps



    return (
        <article className = 'w-fit'>
            {(typeof weather.main != "undefined") ? (
            <section className="flex flex-row gap-8 justify-evenly items-center">
                <div className="Circular_box">
                    <img src={weathericon.base + weather.weather[0].icon + weathericon.end} className="Weather_icon" alt={weather.weather[0].description}/>
                </div>
                <div>
                    <h5 className="text-white uppercase text-sm"> {weather.weather[0].main} </h5>
                    <h5 className="text-white uppercase text-4xl"> {Math.round((weather.main.temp)*1.8 + 32)}°</h5>
                </div>
            </section>
            ):('')}
        </article>
    )
}

export default Weather;


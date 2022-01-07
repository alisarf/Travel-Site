import React, {useState , useEffect} from "react";

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
                console.log(result);
            });
    }

    useEffect(() => {
        search();
    }, []);

    return (
        <div>
            {(typeof weather.main != "undefined") ? (
            <section>
                <div> {Math.round(weather.main.temp)}°C</div>
                <div> {weather.weather[0].main} </div>
                <img src={weathericon.base + weather.weather[0].icon + weathericon.end} className="Weather_icon"></img>
            </section>
            ):('')}
        </div>
    )
}

export default Weather;


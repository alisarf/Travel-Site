import React, { useState} from 'react';
import Nav from '../material-ui/Nav';
import Footer from '../material-ui/Footer'
import FeatureCards from '../material-ui/FeatureCards';
import HeadBanner from '../material-ui/HeadBanner';
import Weather from '../material-ui/Weather';
import MapApi from "../material-ui/MapApi"

//Video Banner
import Video from '../assets/images/bali/surf.mp4'
import VideoBanner from '../material-ui/VideoBanner';

//Feature Images
import Image1 from '../assets/images/kuta/Kuta-Beach.jpg';
import Image2 from '../assets/images/kuta/kuta-surf.jpg';
import Image3 from '../assets/images/kuta/Waterbom-Kuta.jpg';

const Kuta = () => {
        //Feature cards info
        const [arr, setArr ] = useState([
            { title : 'Walk the beach shore', url: Image1}, 
            { title : 'Explore ancient traditions', url: Image2},
            { title : 'Spend the Day at the Waterpark', url: Image3}
            ])
        const location = "kuta"
    return (
        <div>
            <HeadBanner title= 'Kuta'/>
            Hello this Kuta page
            <FeatureCards 
                array = {arr}
                title = 'Things to Do' 
                subtitle = 'Explore the top tourist destinations in the Northern Region of Kuta.' 
            />
            <VideoBanner 
                video = {Video}
                msg = 'Endless Surf'
                speed = '1.2'
            />
            <Weather location = 'kuta'/>
            <MapApi location = {location}/>
            <Footer/>
        </div>
    )
}

export default Kuta;

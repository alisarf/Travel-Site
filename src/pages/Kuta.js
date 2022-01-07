import React from 'react'
import Nav from '../material-ui/Nav';
import Footer from '../material-ui/Footer'
import FeatureCards from '../material-ui/FeatureCards';
import HeadBanner from '../material-ui/HeadBanner';
import Weather from '../material-ui/Weather';

const Kuta = () => {
    return (
        <div>
            <HeadBanner title= 'Kuta'/>
            Hello this Kuta page
            <FeatureCards 
                title = 'Things to Do' 
                subtitle = 'Explore the top tourist destinations in the Northern Region of Kuta.' 
            />
            <Weather location = 'kuta'/>
            <Footer/>
        </div>
    )
}

export default Kuta;

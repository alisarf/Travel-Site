import React from 'react'
import Nav from '../material-ui/Nav';
import Footer from '../material-ui/Footer'
import FeatureCards from '../material-ui/FeatureCards';
import HeadBanner from '../material-ui/HeadBanner';

const Kuta = () => {
    return (
        <div>
            <HeadBanner title= 'Kuta'/>
            <Nav/>
            Hello this Kuta page
            <FeatureCards 
                title = 'Things to Do' 
                subtitle = 'Explore the top tourist destinations in the Northern Region of Kuta.' 
            />
            <Footer/>
        </div>
    )
}

export default Kuta;

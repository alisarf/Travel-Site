import React from 'react'
import Nav from '../material-ui/Nav'
import Footer from '../material-ui/Footer'
import FeatureCards from '../material-ui/FeatureCards';
import HeadBanner from '../material-ui/HeadBanner';

const Denpasar = () => {
    return (
        <div>
            <HeadBanner title= 'Denpasar'/>
            <Nav/>
            Hello this Denpasar page
            <FeatureCards 
                title = 'Things to Do' 
                subtitle = 'Explore the top tourist destinations in the Northern Region of Denpasar.' 
            />
            <Footer/>
        </div>
    )
}

export default Denpasar;

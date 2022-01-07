import React from 'react'
import Footer from '../material-ui/Footer';
import FeatureCards from '../material-ui/FeatureCards';
import HeadBanner from '../material-ui/HeadBanner';
import ImgBanner from '../assets/images/ubud/ubud-banner.jpg';
import Video from '../assets/images/bali/surf.mp4'
import VideoBanner from '../material-ui/VideoBanner';


const Ubud = () => {
    return (
        <div>
            <HeadBanner title= 'Ubud' image = {ImgBanner} />
            <FeatureCards 
                title = 'Things to Do' 
                subtitle = 'Explore the top tourist destinations in the Southern Region of Ubud.' 
            />
            <VideoBanner 
                video = {Video}
                msg = 'Endless Surf'
                speed = '1.2'
            />
            <Footer/>
        </div>
    )
}

export default Ubud;

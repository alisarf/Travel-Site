import React, { useState} from 'react';
import Footer from '../material-ui/Footer';
import FeatureCards from '../material-ui/FeatureCards';
import HeadBanner from '../material-ui/HeadBanner';
import ImgBanner from '../assets/images/ubud/ubud-banner.jpg';
import Video from '../assets/images/bali/rice.mp4'
import VideoBanner from '../material-ui/VideoBanner';
import FeatureTri from '../material-ui/FeatureTri';
import Weather from '../material-ui/Weather';
import ProgressBarBox from '../material-ui/ProgressBarBox';
import SectionPara from '../material-ui/SectionPara';
import MapApi from '../material-ui/MapApi';

//Feature Images
import Image1 from '../assets/images/ubud/ubud-people.jpg';
import Image2 from '../assets/images/ubud/ubud-rice.jpg';
import Image3 from '../assets/images/ubud/ubud-swing.jpg';

//Icons for Font-Awesome
import { faTaxi } from '@fortawesome/free-solid-svg-icons'


const Ubud = () => {
        //Feature cards info
        const [arr, setArr ] = useState([
            { title : 'Local Traditions', url: Image1}, 
            { title : 'Beautiful Rice Fields', url: Image2},
            { title : 'Swing through the Jungle', url: Image3}
            ])

    const location = 'ubud';

    return (
        <div>
            <HeadBanner title= 'Ubud' image = {ImgBanner} />
            <section className='flex flex-row w-3/4 gap-8 justify-center mx-auto'>
                <Weather location = 'denpasar'/>
                <ProgressBarBox  location = {location}/>
            </section>
            <FeatureTri image = {faTaxi} />
            <FeatureCards 
                array = {arr}
                title = 'Things to Do' 
                subtitle = 'Explore the top tourist destinations in the Southern Region of Ubud.' 
            />
            
            {/*<VideoBanner 
                video = {Video}
                msg = 'Endless Rice Fields'
                speed = '1.2'
            />*/}
            <SectionPara location = {location}/>
            <MapApi location = {location}/>
            <Footer/>
        </div>
    )
}

export default Ubud;

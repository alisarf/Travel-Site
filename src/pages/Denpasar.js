import React, { useState} from 'react';
import Nav from '../material-ui/Nav'
import Footer from '../material-ui/Footer'
import FeatureCards from '../material-ui/FeatureCards';
import HeadBanner from '../material-ui/HeadBanner';
import Weather from '../material-ui/Weather';

//Video Banner
import Video from '../assets/images/bali/culture.mp4'
import VideoBanner from '../material-ui/VideoBanner';

//Feature Images
import Image1 from '../assets/images/denpasar/denpasar-elephant.jpg';
import Image2 from '../assets/images/denpasar/denpasar-fighter.jpg';
import Image3 from '../assets/images/denpasar/denpasar-lake.jpg';

//Progress Bar
import ProgressBarBox from '../material-ui/ProgressBarBox';


const Denpasar = () => {
    //Feature cards info
    const [arr, setArr ] = useState([
        { title : 'Elephant', url: Image1}, 
        { title : 'Soldier', url: Image2},
        { title : 'Lake', url: Image3}
        ])

    return (
        <div>
            
            <HeadBanner title= 'Denpasar'/>
            <section className='flex flex-row w-3/4 gap-8 justify-center mx-auto'>
                <Weather location = 'denpasar'/>
                <ProgressBarBox />
            </section>

            <FeatureCards 
                array = {arr}
                title = 'Things to Do' 
                subtitle = 'Explore the top tourist destinations in the Northern Region of Denpasar.' 
            />
            <VideoBanner 
                video = {Video}
                msg = 'Tour Balinese Temples'
                speed = '1.2'
            />
            
            <Footer/>
        </div>
    )
}

export default Denpasar;

import React, { useState} from 'react';
import Footer from '../material-ui/Footer';
import FeatureCards from '../material-ui/FeatureCards';
import HeadBanner from '../material-ui/HeadBanner';
//import VideoBanner from '../material-ui/VideoBanner';
import FeatureTri from '../material-ui/FeatureTri';
import Weather from '../material-ui/Weather';
import ProgressBarBox from '../material-ui/ProgressBarBox';
import SectionPara from '../material-ui/SectionPara';
import MapApi from '../material-ui/MapApi';
import Cost from '../material-ui/Cost';
import Divide from '../material-ui/Divide';

//Icons for Font-Awesome
import { faTaxi } from '@fortawesome/free-solid-svg-icons'

//INPUT: Location, ImgBanner, ImgArr (containing 3 images), Video
//OUTPUT: Entire Page Template

const PageTemplate = (props) => {

    const location = props.city;



    
    const htTrio = '180px';

    return (
        <div>
            <HeadBanner title= {location} image = {props.ImgBanner} />
            <section className='flex flex-row w-3/4 gap-8 justify-center mx-auto' style={{height: htTrio}}>
                <MapApi location = {location} htTrio ={htTrio}/>
                <Weather location = {location}/>
                
                <ProgressBarBox  location = {location}/>
                
            </section>
            <Divide title = {`Traveling ${location}: Average Cost`}/>

            <Cost location = {location}/>

            <Divide title = {`Traveling ${location}: Transportation`}/>

            <FeatureTri image = {faTaxi} />
            <SectionPara location = {location} info = 'transport'/>

            <Divide title = {`Traveling ${location}: Activites`}/>

            <FeatureCards 
                array = {props.imgArr}
                title = {props.imgFeat[0]} 
                subtitle = {props.imgFeat[1]} 
            />

            <Divide title = {`Traveling ${location}: What to know`}/>

            {/* Use a terinary if statement with true/false
             to indicate if videobanner should be here
            <VideoBanner 
                video = {props.video}
                msg = 'Endless Rice Fields'
                speed = '1.2'
            />*/}
            <SectionPara location = {location} info = 'articles'/>
           
            <Footer/>
        </div>
    )
}

export default PageTemplate;

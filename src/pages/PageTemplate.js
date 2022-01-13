import React, { useState} from 'react';
import Footer from '../material-ui/Footer';
import FeatureCards from '../material-ui/FeatureCards';
import HeadBanner from '../material-ui/HeadBanner';
import VideoBanner from '../material-ui/VideoBanner';
import FeatureTri from '../material-ui/FeatureTri';
import Weather from '../material-ui/Weather';
import ProgressBarBox from '../material-ui/ProgressBarBox';
import SectionPara from '../material-ui/SectionPara';
import MapApi from '../material-ui/MapApi';
import Cost from '../material-ui/Cost';

//Icons for Font-Awesome
import { faTaxi } from '@fortawesome/free-solid-svg-icons'


//Input: Location, ImgBanner, ImgArr (containing 3 images), Video



const PageTemplate = (props) => {
        //Feature cards info
    const location = props.city;

    return (
        <div>
            <HeadBanner title= {location} image = {props.ImgBanner} />
            <section className='flex flex-row w-3/4 gap-8 justify-center mx-auto'>
                <Weather location = {location}/>
                <ProgressBarBox  location = {location}/>
            </section>
            <Cost location = {location}/>
            <FeatureTri image = {faTaxi} />
            <FeatureCards 
                array = {props.imgArr}
                title = {props.imgFeat[0]} 
                subtitle = {props.imgFeat[1]} 
            />
            
            {/*<VideoBanner 
                video = {props.video}
                msg = 'Endless Rice Fields'
                speed = '1.2'
            />*/}
            <SectionPara location = {location}/>
            <MapApi location = {location}/>
            <Footer/>
        </div>
    )
}

export default PageTemplate;

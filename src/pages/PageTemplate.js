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
import { Typography } from '@mui/material';

//INPUT: Location, ImgBanner, ImgArr (containing 3 images), Video
//OUTPUT: Entire Page Template

const PageTemplate = (props) => {

    const location = props.city;

    //Navigation of sections : 
            //-could be less hardcoded, maybe read from content.json
    const navArr = [ 
        {id:1, ref: 'cost', title: 'cost'},
        {id:2, ref: 'transport', title: 'transportation'},
        {id:3, ref: 'activities', title: 'activities'},
        {id:4, ref: 'articles', title: 'what to know'}
    ]
    
    const htTrio = '180px';

    return (
        <div>
            <HeadBanner title= {location} image = {props.ImgBanner} />

            {/*<Typography variant='h1' className='text-center capitalize' sx={{margin: '3rem'}}>{location}</Typography>*/}

            <div className='Page_Template_Container z-10 '>
            
            <div className="left-0 bg-white Headbanner_div">
                <h3 className='Accent font-bold self-center text-5xl  capitalize sm:text-5xl md:text-6xl lg:text-7xl'>{location}</h3>
                <h4 className='self-center text-xl text-black  capitalize sm:text-xl md:text-2xl lg:text-3xl'>lorem impusum dolor color lorem ipsum pretty beahes and twinkling sands. Walk the beach and explore the dinign cuisine like never efore.</h4>
            </div>
            <div className=' w-3/4 mx-auto my-8'>
                <ul className='LetterSpacing'>
                    {navArr.map( section => (
                        <li><a href={`#${section.ref}`}><span className='font-bold Font_dk_slate mr-4 text-sm'>0{section.id}. </span><Typography variant='body1' className='inline' sx={{fontWeight: 600, fontSize: '1.3em', textTransform: 'capitalize'}}> {section.title}</Typography></a></li>
                    ))}
                </ul>
            </div>
            <section className='flex flex-row w-3/4 gap-8 justify-center mx-auto' style={{height: htTrio}}>
                <MapApi location = {location} htTrio ={htTrio}/>
                <Weather location = {location}/>
                <ProgressBarBox  location = {location}/>
                
            </section>
            <Divide title = "Cost" nav = 'cost'/>
            <Cost location = {location}/>

            <Divide title = "Transportation" nav = 'transport'/>
            <FeatureTri location = {location}/>
            <SectionPara location = {location} info = 'transport'/>

            <Divide title = "Activites" nav = 'activities'/>
            <FeatureCards 
                array = {props.imgArr}
                title = {props.imgFeat[0]} 
                subtitle = {props.imgFeat[1]} 
            />

            <Divide title = "What to know" nav = 'articles'/>
            {/* Use a terinary if statement with true/false
             to indicate if videobanner should be here
            <VideoBanner 
                video = {props.video}
                msg = 'Endless Rice Fields'
                speed = '1.2'
            />*/}
            <SectionPara location = {location} info = 'articles'/>
            </div>

            <Footer/>
        </div>
    )
}

export default PageTemplate;

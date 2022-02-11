import React, { useState} from 'react';
import Footer from '../material-ui/Footer';
import FeatureCards from '../material-ui/FeatureCards';
import HeadBanner from '../material-ui/HeadBanner';
//import VideoBanner from '../material-ui/VideoBanner';
import FeatureTri from '../material-ui/FeatureTri';
import Weather from '../material-ui/Weather';
import ProgressBarBox from '../material-ui/ProgressBarBox';
import SectionPara from '../material-ui/SectionPara';
import SectionParaMulti from '../material-ui/SectionParaMulti';
import MapApi from '../material-ui/MapApi';
import Cost from '../material-ui/Cost';
import Divide from '../material-ui/Divide';
import TitleHead from '../material-ui/TitleHead';
import palm_leaf from '../assets/images/media/palm/palm_leaf.svg'
import IntroBanner from '../material-ui/IntroBanner';
import DashCard from '../material-ui/DashCard';
//Icons for Font-Awesome
import { Typography, Button } from '@mui/material';

//INPUT: Location, ImgBanner, Video
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
    const htTrio = 'auto';

    //Feature Image [Title, SubTitle]
    const imgFeat = ['Things to Do', `Explore the top tourist destinations in ${location}.`]

    const [coordinates, setCoordinates] = useState([-8.650000 , 115.216667])

    return (
        <div>  
            <HeadBanner title= {location} />
            <IntroBanner />
            <div className='Page_Template_Container z-10 '>
                {/* The navigation selections */}
                <div className=' w-3/4 mx-auto my-8'>
                    <ul className='LetterSpacing'>
                        {navArr.map( section => (
                            <li>
                                <a href={`#${section.ref}`}>
                                    <span className='font-bold Font_dk_slate mr-4 text-sm'>0{section.id}.</span>
                                    <Typography 
                                        variant='body1' 
                                        className='inline Black' 
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: '1.3em',
                                            textTransform: 'capitalize'
                                        }}>
                                        {section.title}
                                    </Typography>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* The navigation selections */}
                <section className='block w-4/5 gap-8 justify-between mx-auto pt-16 pb-8 sm:flex flex-row' style={{height: htTrio}}>
                    <section className='w-2/5'>
                        <DashCard location = {location}/>
                    </section>
                     <MapApi cords = {coordinates}/>
                </section>

                
                
                
                <Weather 
                    location = {location}
                    cords = {coordinates} 
                    setCords = {setCoordinates}
                />
                

                <section className=' w-4/5 m-auto rounded-2xl overflow-hidden  shadow-lg'>
                    <div className='bg-white p-12'>
                        <TitleHead  title = "transport" nav = 'transport'/>
                        <FeatureTri location = {location}/>
                    </div>
                    <SectionPara 
                        location = {location}
                        info = 'transport'
                    />
                    {/*<Button variant="contained" className='Button'>Learn More</Button>*/}

                </section>

                <section className='pt-16 pb-8'>                
                    <TitleHead  title = "Cost of Living" nav = 'cost'/>
                    <Cost location = {location}/>
                </section> 

                <section className='Accent_Lt Palm pt-16 pb-8'>
                    <TitleHead  title = "Things to Do" nav = 'activities'/>
                    <FeatureCards 
                        array = {props.imgArr}
                        title = {imgFeat[0]} 
                        subtitle = {imgFeat[1]} 
                        location = {location}
                    />
                </section>

                <section className='w-4/5 m-auto p-16 relative mx-auto bg-white rounded-2xl overflow-hidden shadow-lg'>
                <TitleHead title = "What to know" nav = 'articles'/>
                
                <SectionParaMulti location = {location} info = 'articles'/>
                {/* Use a terinary if statement with true/false
                to indicate if videobanner should be here
                <VideoBanner 
                    video = {props.video}
                    msg = 'Endless Rice Fields'
                    speed = '1.2'
                />*/}
                <img className='Palm_leaf top-28 right-1/3' style={{transform: 'rotate(180deg)'}} src={palm_leaf}/>
                <img className='Palm_leaf bottom-0 left-1/3' src={palm_leaf}/>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default PageTemplate;

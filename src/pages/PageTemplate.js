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
import Card from '@mui/material/Card';
import Cost from '../material-ui/Cost';
import RadioGroupRating from '../material-ui/rating';
import Divide from '../material-ui/Divide';
import TitleHead from '../material-ui/TitleHead';
import palm_leaf from '../assets/images/media/palm/palm_leaf.svg'
import IntroBanner from '../material-ui/IntroBanner';
import DashCard from '../material-ui/DashCard';
import img from '../assets/images/kuta/Kuta-Beach.jpg'

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
            <IntroBanner navArr = {navArr}/>
            <div className='Page_Template_Container z-10 '>
                {/* The navigation selections */}

                {/* The navigation selections */}
                <section className='block w-4/5 gap-8 justify-between mx-auto pt-16 pb-8 sm:flex flex-row' style={{height: htTrio}}>
                    <section className='w-2/5'>

                    <section className='rounded-2xl m-auto h-full overflow-hidden shadow-lg' >
                        <div className='h-2/5 p-8 relative bg-cover bg-center' style={{ backgroundImage: `url(${props.image ? props.image : img})` }}>
                            <span className='absolute bottom-8 right-8'>
                                <Weather 
                                location = {location}
                                cords = {coordinates} 
                                setCords = {setCoordinates}
                                />
                            </span>
                        </div>
                        <div className='h-3/5 flex flex-col justify-evenly bg-white p-8'>
                            <span className='Tag'>Asia</span>
                            <h3>{location}, Indonesia</h3>
                            < ProgressBarBox location = {location}/>
                            <button className='Primary_Btn'>Learn More</button>
                        </div>
                    </section>

                    </section>
                     <MapApi cords = {coordinates}/>
                </section>

                
                
                

                

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

            {/* More Destinations Hook */}
            <div>
                <TitleHead title = "Featured Destinations" nav = 'articles'/>
                <Typography variant = "body1" className='text-center Work_sans'>Find activites hosted by the locals.</Typography>
            </div>
            <section className='grid grid-cols-5 gap-8 w-3/4 mx-auto mt-16 mb-32'>
                <Card className='w-full h-auto Test flex flex-col justify-center' sx={{ height: '13vw', borderRadius: 0}}><h5 className='font-bold text-white text-center text-2xl Text-shadow Roboto_Condensed'>Denpasar</h5></Card>
                <Card className='w-full h-auto Test flex flex-col justify-center' sx={{ height: '13vw', borderRadius: 0 }}><h5 className='font-bold text-white text-center text-2xl Text-shadow Roboto_Condensed'>Denpasar</h5></Card>
                <Card className='w-full h-auto Test flex flex-col justify-center' sx={{ height: '13vw', borderRadius: 0 }}><h5 className='font-bold text-white text-center text-2xl Text-shadow Roboto_Condensed'>Denpasar</h5></Card>
                <Card className='w-full h-auto Test flex flex-col justify-center' sx={{ height: '13vw', borderRadius: 0 }}><h5 className='font-bold text-white text-center text-2xl Text-shadow Roboto_Condensed'>Denpasar</h5></Card>
                <Card className='w-full h-auto Test flex flex-col justify-center' sx={{ height: '13vw', borderRadius: 0 }}><h5 className='font-bold text-white text-center text-2xl Text-shadow Roboto_Condensed'>Denpasar</h5></Card>
            </section>

            <section className="w-4/5 mx-auto p-16 text-center relative Accent_Bg rounded-2xl bottom-4 " style={{top: '5vw'}}>
                <h3 className='text-white'>How helpful was Travel Bali at planning your next trip?</h3>
                <RadioGroupRating/>
                <div className='absolute w-full top-0' style={{zIndex:-1}}><img src={palm_leaf} className='m-auto w-40'/></div>
            </section>
            <Footer/>
        </div>
    )
}

export default PageTemplate;

import React, { useState} from 'react';
import './css/style.css';
import './css/custom.css';
import './css/general.css';
import CardBuilder from './material-ui/CardBuilder';
import { Typography, Button, Paper, TextField, Pagination} from '@mui/material';
import RadioGroupRating from './material-ui/rating';
import FeatureCards from './material-ui/FeatureCards';
import HeadBanner from './material-ui/HeadBanner'; 
import ImgBanner from './assets/images/bali/headbanner2.png';
import Video from './assets/images/bali/culture.mp4';
import Footer from './material-ui/Footer';
import VideoBanner from './material-ui/VideoBanner';
import TitleHead from './material-ui/TitleHead';
import palm_leaf from './assets/images/media/palm/palm_leaf.svg'
import this_img from './assets/images/ubud/ubud-people.jpg';
import PageTemplate from './pages/PageTemplate'
import imagesArr from './assets/content/mainFeature.json';

//card
import { Card, Backdrop } from '@mui/material';


function App() {

  const ftArr = [
    { "title" : "People", "url": "ubud-people.jpg"}, 
    { "title" : "Rice Field", "url": "ubud-rice.jpg"},
    { "title" : "Swing over Fields", "url": "ubud-swing.jpg"},
    { "title" : "Rice Field", "url": "ubud-rice.jpg"},
    { "title" : "Swing over Fields", "url": "ubud-swing.jpg"}
    ]





    //---Feature Images with Pagination UI---
  //Feature Image Arr with pagination: 
  //cache 'images' object
  const featImgArr = imagesArr.images;
  
  //Img Array Range
  const [start, setStart] = useState([0])
  const [end, setEnd] = useState([3])
  //Handle new page click
  function pageChange (e, value) {
    //value = page count
    let starter = ((value - 1) * 3)
    let ending = starter + 3
    setStart(starter)
    setEnd(ending)
  }
  
  const data = ((JSON.parse(localStorage.getItem('data')) || ''));
  const [elem, setElem] = useState(data);

  //Active Location
  const [destination, setDestination] = useState()
  
  return (
    <main>
      
      <HeadBanner title= 'Adventure!' image = {ImgBanner}  elem = {elem}/>


      { destination ? <PageTemplate city = {destination}/> : 

      <div className='grid pt-30 w-full mx-auto mt-12'>

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
      {/*<Typography variant='h1' className='text-center'>Travel Bali</Typography>*/}
      <section className='Accent_Lt Palm flex flex-col m-auto items-center pt-32 pb-32 gap-y-4 w-full'>
        <TitleHead title = "Get the Latest News!" nav = 'signup'/>
        <TextField id="outlined-basic" label="First Name" variant="outlined" className='flex-1' />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" className='flex-2' />
        <TextField id="outlined-basic" label="Email" variant="outlined" className='flex-3' />
        <Button>Sign Up</Button>
      </section>

      <section className='relative grid grid-cols-3  mx-auto my-32 w-3/4'>

        <div className='grid grid-cols-2 grid-rows-2 gap-1 mx-auto col-span-2 w-full' style={{height: '50vh'}}>
          <div className='relative h-fit overflow-hidden'>
            <img className='w-full h-auto absolute -top-1/2' src={`/images/ubud/${ftArr[0].url}`}/>
            <div className='absolute bg-black w-full h-full cursor-pointer Overlay'></div>
          </div>
          <div className='relative h-fit  overflow-hidden'>
            <img className='w-full h-auto absolute -top-1/2' src={`/images/ubud/${ftArr[1].url}`}/>
            <div className='absolute bg-black w-full h-full cursor-pointer Overlay'></div>
          </div>
          <div className='relative h-fit overflow-hidden'>
            <img className='w-full h-auto absolute -top-1/2' src={`/images/ubud/${ftArr[3].url}`}/>
            <div className='absolute bg-black w-full h-full cursor-pointer Overlay'></div>
          </div>
          <div className='relative h-fit  overflow-hidden'>
            <img className='w-full h-auto absolute -top-1/2' src={`/images/ubud/${ftArr[2].url}`}/>
            <div className='absolute bg-black w-full h-full cursor-pointer Overlay'></div>
          </div>
        </div>
        <div className='my-auto bg-gray-200 h-4/5 border rounded-r-xl flex flex-col justify-center'>
          <TitleHead title = "Get Outside" nav = 'articles'/>
          <Typography variant = "body1" className='text-center Work_sans'>Find activites hosted by the locals.</Typography>
        </div>

      </section>

        {/*<section className="grid m-auto gap-10 sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3">    
          {featImgArr.slice(start, end).map(image => (
              <CardBuilder id= {image.id} image ={image.url} setElem={setElem} elem={elem} className="mx-auto h-full"/>
            ))}
          </section>
        <Pagination className = "m-auto" count={Math.ceil(featImgArr.length / 3)} variant="outlined" color="primary"  onChange={pageChange}/>
        */}
        <section className='m-auto w-full'>
        {/*<img className=' m-auto rounded' src={cultureimage} alt="" />
        <VideoBanner 
          video = {Video}
          msg = 'Culture'
        />*/}</section>
      
      <div className="gap-10 pt-8 pb-4">     
        {/* default array needed for home page images*/}
        <TitleHead title = "Things to do" nav = 'articles'/>
        <FeatureCards 
          location = 'denpasar' 
          title = 'Featured Locations' 
          subtitle = 'Explore the best locations within the southern region.' 
        />
      </div>

      </div>  }
      {/* end of bulk of page here*/}



      <section className="w-1/2 mr-auto ml-auto mt-36 mb-36 p-5 text-center relative">
        <Typography variant='h6' className="my-3">How helpful was Travel Bali at planning your next trip?</Typography>
        <RadioGroupRating/>
        <div className='absolute w-full top-0' style={{zIndex:-1}}><img src={palm_leaf} className='m-auto w-40'/></div>
      </section>

      <Footer/>
    </main>
  );
}

export default App;

import React, { useState} from 'react';
import './css/style.css';
import './css/custom.css';
import './css/general.css';
import CardBuilder from './material-ui/CardBuilder';
import { Typography, Button, Paper, TextField, Pagination} from '@mui/material';
import RadioGroupRating from './material-ui/rating';
import FeatureCards from './material-ui/FeatureCards';
import HeadBanner from './material-ui/HeadBanner'; 
import ImgBanner from './assets/images/ubud/ubud-banner.jpg';
import Video from './assets/images/bali/culture.mp4';
import Footer from './material-ui/Footer';
import VideoBanner from './material-ui/VideoBanner';

import imagesArr from './assets/content/mainFeature.json';


function App() {
  //Favorite Icon Feature Array
  const[heart, setHeart] = useState([]);

  //STYLES OBJECT PALLETTE
  const styles = {
    icon: { width: '30px', height: '30px',},
    aqua: {color: 'rgb(87, 189, 183)',}
  }

  //Feature cards info : could be json import instead hardcode
  const arr = [
    { id: 0, title : 'Ubud', url: 'https://images.unsplash.com/photo-1559628233-eb1b1a45564b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'}, 
    { id: 1, title : 'Denpasar', url: 'https://images.unsplash.com/photo-1610375580030-885edbb6f92b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { id: 2, title : 'Kuta', url: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
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
    //console.log(images2)
  }


  
  const data = ((JSON.parse(localStorage.getItem('data')) || ''));
  const [elem, setElem] = useState(data);
  
  return (
    <main>
      <HeadBanner title= 'Adventure!' image = {ImgBanner}  elem = {elem}/>
      <div className='grid gap-y-10 pt-30 w-full m-auto md:w-full lg:w-3/4'>
        <div>
          <Typography variant='h5' className='text-center' sx={{ fontWeight: '700'}} >Get Outside</Typography>
          <h6 className='text-center text-gray-400'>Find activites hosted by the locals.</h6>
        </div>
        <section className="grid gap-10 sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3">    
          {featImgArr.slice(start, end).map(image => (
              <CardBuilder id= {image.id} image ={image.url} setElem={setElem} elem={elem} className="mx-auto h-full"/>
            ))}
        </section>
        <Pagination className = "m-auto" count={Math.ceil(featImgArr.length / 3)} variant="outlined" color="primary"  onChange={pageChange}/>
        <Typography gutterBottom variant="h3" className="text-center">Support the Locals.</Typography>
        {/*<img className=' m-auto rounded' src={cultureimage} alt="" />*/}
        <VideoBanner 
          video = {Video}
          msg = 'Culture'
        />
      </div>
      <div className="flex justify-center gap-10">     
        <FeatureCards 
          array = {arr}
          title = 'Featured Locations' 
          subtitle = 'Explore the best locations within the southern region.' 
        />
      </div>
      <Paper elevation={3} className='flex flex-col m-auto w-4/12 items-center p-3 gap-y-4 pb-4 md:mx-4 w-full'>
        <Typography gutterBottom variant="h5" className="text-center">Get the Latest!</Typography>
        <TextField id="outlined-basic" label="First Name" variant="outlined" className='flex-1' />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" className='flex-2' />
        <TextField id="outlined-basic" label="Email" variant="outlined" className='flex-3' />
        <Button>Sign Up</Button>
      </Paper>
      <Paper elevation={3} className="w-1/2 mr-auto ml-auto mt-36 mb-36 p-5 rounded shadow text-center">
        <Typography variant='h6' className="my-3">How helpful was Travel Bali at planning your next trip?</Typography>
        <RadioGroupRating/>
      </Paper>
      <Footer/>
    </main>
  );
}

export default App;

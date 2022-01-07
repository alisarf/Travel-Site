import React, { useEffect, useState} from 'react';
import './css/style.css';
import './css/custom.css';
import './css/general.css';
import CardBuilder from './material-ui/Card';
import { Typography, Button, Container, Rating, Paper, TextField, Pagination} from '@mui/material';
import RadioGroupRating from './material-ui/rating';
import culturebali from './assets/culturebali.jpg';
//import { ReactComponent as Logo } from './assets/palm-tree-svgrepo-com.svg';
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import FeatureCards from './material-ui/FeatureCards';
import HeadBanner from './material-ui/HeadBanner'; 
import ImgBanner from './assets/images/ubud/ubud-banner.jpg';
import Video from './assets/images/bali/culture.mp4';


import Footer from './material-ui/Footer';
import VideoBanner from './material-ui/VideoBanner';






function App() {
  const cultureimage = culturebali;
  //generate random image
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('bali');

  const[heart, setHeart] = useState([]);


  //STYLES OBJECT PALLETTE
  const styles = {
    icon: { width: '30px', height: '30px',},
    aqua: {color: 'rgb(87, 189, 183)',}
  }

  useEffect(() => {
      fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&orientation=horizontal`)
      .then(res => res.json())
      .then(data => {
          console.log(data.hits[2].webformatURL);
          setImages(data.hits.splice(0,3)); //splice for fewer results than what was retrieved
          console.log('your images' + images[2])
          setIsLoading(false);
      })
      .catch(err =>console.log(err));
  }, []);



  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(
    document.querySelectorAll('*'),
    function(el) {
      if (el.offsetWidth > docWidth) {
        console.log(el);
      }
    }
  );


  return (

    <main>

    <HeadBanner title= 'Adventure!' image = {ImgBanner} />

    <div className='grid gap-y-10 pt-30 w-3/4 m-auto'>
    <div>
      <Typography variant='h5' className='text-center' sx={{ fontWeight: '700'}} >Get Outside</Typography>
      <h6 className='text-center text-gray-400'>Find activites hosted by the locals.</h6>
    </div>

      <section className="grid gap-10 sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
      {images.map(image => (
          <CardBuilder key= {image.id} image ={image} setHeart={setHeart} heart ={heart} className="mx-auto h-full"/>
        ))}
      </section>
      <Pagination className = "m-auto" count={5} variant="outlined" color="primary" />
      <Typography gutterBottom variant="h3" className="text-center">
            Support the Locals.
      </Typography>
      
      {/*<img className=' m-auto rounded' src={cultureimage} alt="" />*/}
      <VideoBanner 
        video = {Video}
        msg = 'Culture'
      />

      
      </div>

      <div className="flex justify-center gap-10">     
      <FeatureCards 
        title = 'Featured Locations' 
        subtitle = 'Explore the best locations within the southern region.' 
      />
      </div>
    
      <Paper elevation={3} className='flex flex-col m-auto w-4/12 items-center p-3 gap-y-4 pb-4'>
      <Typography gutterBottom variant="h5" className="text-center">Get the Latest!</Typography>
        <TextField id="outlined-basic" label="First Name" variant="outlined" className='flex-1' />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" className='flex-2' />
        <TextField id="outlined-basic" label="Email" variant="outlined" className='flex-3' />
        <Button>Sign Up</Button>
      </Paper>
    
      <Paper elevation={3} className="w-1/2 mr-auto ml-auto mt-36 mb-36 p-5 rounded shadow text-center">
        <Typography variant='h6' className="my-3">
        How helpful was Travel Bali at planning your next trip?
        </Typography>
        <RadioGroupRating/>
      </Paper>
      <Footer/>
    </main>
  );
}


export default App;

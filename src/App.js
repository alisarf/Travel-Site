import React, { useEffect, useState} from 'react';
import './css/style.css';
import './css/custom.css';
import './css/general.css';
import CardBuilder from './material-ui/Card';
import { Typography, Button, Container, Rating, Paper, TextField } from '@mui/material';
import RadioGroupRating from './material-ui/rating';
import { createTheme } from '@mui/material/styles';
import culturebali from './assets/culturebali.jpg';
import { ReactComponent as Logo } from './assets/palm-tree-svgrepo-com.svg';

import { Route , Link } from 'react-router-dom';

import Ubud from './Ubud'


//Icons mUI
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { blue } from '@mui/material/colors';




function App() {
  const cultureimage = culturebali;
  //generate random image
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('bali');


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
          setImages(data.hits.splice(0,5)); //splice for fewer results than what was retrieved
          console.log('your images' + images[2])
          setIsLoading(false);
      })
      .catch(err =>console.log(err));
  }, []);



  return (

    <main>

      <section>
        <nav className='flex justify-between py-3 mx-auto w-3/4'>
        <Typography variant='h4' component='h4' gutterBottom className="text-center">Travel Bali</Typography>
        <ul>
          <li className='inline-block m-3'>
            <a href="" className='text-xl hover:text-gray-300 hover:underline'>Ubud</a>
          </li>
          <li className='inline-block m-3'>
            <a href="" className='text-xl hover:text-gray-300 hover:underline'>Denpasar</a>
          </li>
          <li className='inline-block m-3'>
            <a href="" className='text-xl hover:text-gray-300 hover:underline'>Kuta</a>
          </li>
          <li className='inline-block m-3'>
            <FavoriteRoundedIcon/>
          </li>
        </ul>
        </nav>
        <div className='flex-col justify-center w-screen h-screen'>
          <Typography variant='h3' component='h2' gutterBottom className="text-center text-white m-auto relative top-1/3">
            Explore / Eat / Relax
          </Typography>
        </div>
        <div className='Frost'>
        </div>
        <div className='Heroimage'></div>
      </section>
    <div className='grid gap-y-10 pt-30 w-3/4 m-auto'>

      <Typography gutterBottom variant="h3" className="text-center m-3">
            Get outside.
      </Typography>
      <section className="grid grid-cols-3 gap-10">
      {images.map(image => (
          <CardBuilder key= {image.id} image ={image} className="mx-auto h-full"/>
        ))}
      </section>
      <Typography gutterBottom variant="h3" className="text-center">
            Support the Locals.
      </Typography>
      
      <img className=' m-auto rounded' src={cultureimage} alt="" />
      <Typography gutterBottom variant="h3" className="text-center">
            Embrace the Culture.
      </Typography>
      <div className="flex justify-center gap-10">

      </div>
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
      <footer>
        <section className='flex flex-row justify-between'>
          <div className='inline-block'>
              <h6 className='font-bold'>Resources</h6>
              <ul className='ListItems'>
                <li>Call Center</li>
                <li>Affliates</li>
                <li>Toll Free</li>
                <li>Coupons</li>
              </ul>
          </div>
          <div className='inline-block'>
              <h6 className='font-bold'>Travelers</h6>
              <ul className='ListItems'>
                <li>Insurnace</li>
                <li>Reimbursement</li>
                <li>Covid Protocols</li>
                <li>Travel Bans</li>
              </ul>
          </div>
          <div className='inline-block'>
            <h6 className='font-bold'>Company</h6>
            <ul className='ListItems'>
              <li>Contact us</li>
              <li>Locations</li>
              <li>Mission</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className='inline-block'>
            <h6 className='font-bold' style={styles.aqua}>Get In Touch</h6>
            <ul className='ListItems'>
              <li>1.800.867.5309</li>
              <li>customerservice@travelbali.com</li>
            </ul>
          </div>
        </section>
        <section className='flex flex-row justify-between'>
          <div className="flex flex-row">
            <Logo className='w-10 h-10 inline-block'/>
            <h5 className="inline-block font-bold italic text-3xl m-auto" style={styles.aqua}>Travel Bali</h5>
          </div>
          
          
          <div>
          <FacebookIcon style = {{...styles.icon, ...styles.aqua}}/>
          <InstagramIcon style = {{...styles.icon, ...styles.aqua}}/>
          <TwitterIcon style = {{...styles.icon, ...styles.aqua}}/>
          </div>
        </section>
      </footer>
    </main>
  );
}


export default App;

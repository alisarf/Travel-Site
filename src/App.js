import React, { useEffect, useState} from 'react';
import './App.css';
import './css/style.css';
import CardBuilder from './material-ui/Card';
import { Typography, Button, Container, Rating, Paper, TextField } from '@mui/material';
import RadioGroupRating from './material-ui/rating';

function App() {
  const bgimage = 'https://source.unsplash.com/random/?bali beach/landscape';

  //generate random image
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('bali');

  //const tags = props.image.tags.split(',');

  useEffect(() => {
      fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&orientation=horizontal`)
      .then(res => res.json())
      .then(data => {
          console.log(data.hits[2].webformatURL);
          setImages(data.hits);
          console.log('your images' + images[2])
          setIsLoading(false);
      })
      .catch(err =>console.log(err));
  }, []);



  return (
    <main>
      <nav className='flex justify-between my-3 mx-auto w-3/4'>
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
      </ul>
      </nav>
    <div className='grid gap-y-10 pt-30 w-3/4 m-auto'>

      <div className='flex-col justify-center w-100'>

        <Typography variant='h3' component='h2' gutterBottom className="text-center text-gray-500">
          Explore / Eat / Relax
        </Typography>
        <img className='w-50 h-50 m-auto rounded' src={bgimage} alt="" />
      </div>
      <Typography gutterBottom variant="h3" className="text-center">
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
      
      <img className=' m-auto rounded' src={bgimage} alt="" />
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
    </main>
  );
}

export default App;

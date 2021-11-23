import logo from './logo.svg';
import './App.css';
import './css/style.css';
import CardBuilder from './material-ui/Card';
import { Typography, Button, Container, Rating, Paper } from '@mui/material';
import RadioGroupRating from './material-ui/rating';

function App() {
  const bgimage = 'https://source.unsplash.com/random/?bali beach/landscape';


  return (
    <main>
    <div className='grid gap-y-10 pt-30'>

      <div className='flex-col justify-center w-100'>
        <Typography variant='h2' component='h1' gutterBottom className="text-center">
          Travel Bali
        </Typography>
        <Typography variant='h2' component='h1' gutterBottom className="text-center text-gray-500">
          Explore / Eat / Relax
        </Typography>
        <img className='w-100 h-50 m-auto rounded' src={bgimage} alt="" />
      </div>
      <Typography gutterBottom variant="h3" className="text-center">
            Get outside.
      </Typography>
      <div className="flex justify-center gap-10">
        <CardBuilder/>
        <CardBuilder/>
        <CardBuilder/>
      </div>
      <Typography gutterBottom variant="h3" className="text-center">
            Support the Locals.
      </Typography>
      <img className='h-2/4 m-auto rounded' src={bgimage} alt="" />
      <Typography gutterBottom variant="h3" className="text-center">
            Embrace the Culture.
      </Typography>
      <div className="flex justify-center gap-10">
        <CardBuilder/>
        <CardBuilder/>
        <CardBuilder/>
      </div>
    </div>
    
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

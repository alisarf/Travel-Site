import logo from './logo.svg';
import './App.css';
import { Typography, Button, Container } from '@mui/material';

function App() {
  return (
    <div>

      <Container>
        <Typography variant='h2' component='h1' gutterBottom className="text-center">
          Travel Bali
        </Typography>
        <Typography variant='h2' component='h1' gutterBottom>
          Explore
        </Typography>
        <img src="https://source.unsplash.com/random/?bali beach" alt="" />
      </Container>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;

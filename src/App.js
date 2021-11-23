import logo from './logo.svg';
import './App.css';
import { Typography, Button } from '@mui/material';

function App() {
  return (
    <div>
      <Typography variant='h2' component='h1' gutterBottom>
        My first material UI component!
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;

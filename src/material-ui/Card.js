import React, {useState, useEffect} from 'react';
import {Card, CardMedia, Typography, CardContent, CardActions, Button} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { HeartBroken } from '@mui/icons-material';

function CardBuilder (props) {


  //onClick={props.setHeart( })}
  //caches the heart that you make on a card
  const handleChange = () => { 
    props.setHeart([...props.heart, [props.image.webformatURL]]); //this now adds to the array of favorites
    console.log(props.heart + ['this is heart'])
    console.log(JSON.stringify(props.heart))
    console.log('The checkbox was toggled' + props.image.webformatURL); 
    
  }; 

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    console.log(props.image.webformatURL)
    const image = 'https://source.unsplash.com/random/?bali beach/landscape';
    return (
        <Card sx={{ maxWidth: 345 }}  className="mx-auto">
        <CardMedia
          component="img"
          alt="green iguana"
          height="100px"
          image= {props.image.webformatURL}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lorem Ipsum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Laborum et sit cupidatat in amet cillum do aliqua occaecat est dolor tempor ipsum.
            Laborum et sit cupidatat in aliqua occaecat est dolor tempor ipsum.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <div className="ml-auto">
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={handleChange}/>
                <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                />
            </div>
        </CardActions>
      </Card>
    );
}

export default CardBuilder;
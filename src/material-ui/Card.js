import React, {useState, useEffect} from 'react';
import {Card, CardMedia, Typography, CardContent, CardActions, Button} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { HeartBroken } from '@mui/icons-material';

function CardBuilder (props) {

  //const [checked, setChecked] = useState(true);
  //onClick={props.setHeart( })}
  //caches the heart that you make on a card
  const handleChange = (e) => { 
    if (e.target.checked === true ) {
      props.setHeart([...props.heart, [props.image.webformatURL]]);
      //the list has nothing to begin with so it wont iterate through

    } else {
      for(var a = 0; a < props.heart.length; a++) {
        console.log('running' + props.heart[a])
        if(props.heart[a] == props.image.webformatURL) {
          
          //removed
          props.heart.splice(a, 1);
          console.log(a +'it needs to be removed' + JSON.stringify(props.heart))
        } else {
          
          //so add it
          props.setHeart([...props.heart, [props.image.webformatURL]]);
          //console.log('its not here anyways' + JSON.stringify(props.heart))
          //console.log(props.heart[a] + ' vs ' + props.image.webformatURL)
          //console.log(JSON.stringify(props.heart))
        }
      }
       //remove from array
       console.log('unchecked')
    }
    //props.setHeart([...props.heart, [props.image.webformatURL]]); //this now adds tab info to the array of favorites

  }; 

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    //console.log(props.image.webformatURL)
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
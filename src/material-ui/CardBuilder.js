import React, {useState, useEffect, state} from 'react';
import {Card, CardMedia, Typography, CardContent, CardActions, Button, ListItemSecondaryAction} from '@mui/material';
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
      if (props.elem.length == 0) {
       props.setElem([{ id: props.id, url: props.image }])
      } else {
        if (e.target.checked) {
          console.log('checked')
          props.setElem([...props.elem, { id: props.id, url: props.image }])
        } else {
          console.log('unchecked');
          props.setElem(props.elem.filter(({id}) => id !== props.id))
          //removeItem = (id) => {
          //  setProduct(product.filter((i)=>(i.id !== id)))
          //}
        }
      }
    localStorage.setItem('data', JSON.stringify(props.elem));
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
          image= {props.image}
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
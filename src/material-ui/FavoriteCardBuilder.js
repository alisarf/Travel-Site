import React, {useState, useEffect, state} from 'react';
import {Card, CardMedia, Typography, CardContent, CardActions, Button, ListItemSecondaryAction} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { HeartBroken } from '@mui/icons-material';

function FavoriteCardBuilder (props) {


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
      </Card>
    );
}

export default FavoriteCardBuilder;
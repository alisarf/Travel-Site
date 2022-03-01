import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import React from 'react';
//Requires following props: image and headline text

const FeatureCard = (props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const fileUrlBase = `/images/${props.location}/${props.url}`
    return (
        <Card 
            className = 'inline-block w-full relative'
            sx={{borderRadius: '15px'}}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="450px"
                    image= {fileUrlBase}
                    alt="green iguana"
                    className='relative W-20vh'
                />
                {/* TODO : USE TXT OVER IMG CLASS FOR VISIBILTY TEXT GRADIENT ON IMAGES */}
                <div className='z-0 absolute top-0 bg-gradient-to-t opacity-80 from-gray-900 via-transparent-20 to-transparent trans transition-opacity hover:opacity-20 w-full h-full'></div>
                
                <div className='absolute bottom-0 text-white flex flex-row justify-between px-8 py-6 w-full'>
                <Typography 
                    gutterBottom variant="h6"
                    component="div" 
                    className='text-white align-middle'
                >
                    {props.headline}
                </Typography>
                <Checkbox
                    sx={{
                    color: 'white',
                    '&.Mui-checked': {
                        color: 'white',
                    },
                    }}
                    {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </div>
                
            </CardActionArea>
        </Card>
    )
};

export default FeatureCard;
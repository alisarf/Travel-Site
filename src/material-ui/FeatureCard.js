import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useState, useEffect } from 'react';
import React from 'react';
//Requires following props: image and headline text

const FeatureCard = (props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    //Favorite Button
    /*
    const data = ((JSON.parse(localStorage.getItem('data')) || ''));
    const [heart, setHeart] = useState(data);
    const handleChange = (e) => {
        
        if (heart.length == 0) {
         setHeart([{ id: props.id, url: props.image }])
        } else {
          if (e.target.checked) {
            console.log('checked')
            setHeart([...heart, { id: props.id, url: props.image }])
          } else {
            console.log('unchecked');
            setHeart(heart.filter(({id}) => id !== props.id))
          }
        }
        
        console.log('end of action' + JSON.stringify(heart)) 
    }; 

      */
    //const data = ((JSON.parse(localStorage.getItem('data')) || ''));
    

    const [checked, setChecked] = React.useState(false);
    const handleChange = (event)  => {
        setChecked(event.target.checked);
        console.log(!checked)

        if (props.elem.length == 0) {
            props.setElem([{ id: props.id, url: props.image }])
           } else {
             if (!checked == true) {
               console.log('checked')
               let myItem = { id: props.id , url: props.image }
               console.log(myItem)
               //setHeart([...heart, { id: props.id, url: props.image }])
               props.setElem([...props.elem, myItem])
               console.log('end of action' + JSON.stringify(props.elem) + props.elem.length) 
             } else if (!checked == false) {
               console.log('unchecked');
               props.setElem(props.elem.filter(({id}) => id !== props.id))
             }
            
        }
        localStorage.setItem('data', JSON.stringify(props.elem));
    }


    return (
        <Card 
            sx={{ maxWidth: 345 }}
            className = 'inline-block m-4'
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="450px"
                    image= {props.image}
                    alt="green iguana"
                    className='relative Feature_cardWidth'
                    sx={{ width: '350px' }}
                />
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
                    {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked = {checked} onChange={handleChange}/>
                </div>


                
            </CardActionArea>
        </Card>
    )
};

export default FeatureCard;
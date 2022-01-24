import React, { useState} from 'react';
import { Pagination, Typography } from '@mui/material';
import '../css/general.css';



import FeatureCard from "./FeatureCard";
import culturebali from '../assets/culturebali.jpg';

//REQUIRED PARENT PROP: title, subheadline
//Input: a list of image urls with featured text headline
//Output: synthesizes multiple cards via map

const FeatureCards = (props) => {
    
    const data = ((JSON.parse(localStorage.getItem('data')) || ''));
    const [elem, setElem] = useState(data);
    /*
    const [arr, setArr ] = useState([
        { title : 'Ubud', url: 'https://images.unsplash.com/photo-1559628233-eb1b1a45564b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'}, 
        { title : 'Denpasar', url: 'https://images.unsplash.com/photo-1610375580030-885edbb6f92b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
        { title : 'Kuta', url: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
        ])
    */
    return (
        <section className='my-10'>
            <Typography variant='h3' className='text-center' sx={{ fontWeight: '700'}}>{props.title}</Typography>
            <Typography variant='body1' className='text-center'>{props.subtitle}</Typography>
            <div className='my-5 flex justify-center FeatureCards_MQ'>
                {props.array.map(item => (
                    //wrap in link hook with location variable
                    <FeatureCard id = {item.id} image = {item.url} headline = {item.title} elem = {elem} setElem = {setElem} />
                ))}
            </div>
            <div className='my-5'>
                <Pagination 
                    className = "m-auto my-10" 
                    count={5} variant="outlined" 
                    color="primary" 
                />
            </div>
        </section>
    )
}

export default FeatureCards;
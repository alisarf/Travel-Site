import React from 'react'
import { Typography } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Link } from 'react-router-dom'

import '../css/style.css';
import '../css/custom.css';
import '../css/general.css';



const Nav = (props) => {
    const printHeart = () => {
        console.log(props.heart)
    }


    return (
            <nav className='flex justify-between pt-8 pb-4 mx-auto w-3/4 items-center text-white Roboto tracking-widest'>
                <Link to='/' >
                    <Typography variant='h6' gutterBottom className="text-center">Travel Bali</Typography>
                </Link>
            <ul>
            <li className='inline-block m-3'>
                
                <Link to='/ubud'>
                    <a href="" className='text-base underline Nav-link'>Ubud</a>
                </Link>
            </li>
            <li className='inline-block m-3'>
                <Link to='/denpasar'>
                    <a href="" className='text-base underline Nav-link'>Denpasar</a>
                </Link>
            </li>
            <li className='inline-block m-3'>
                <Link to='/kuta' state = {props.heart}>
                    <a href="" className='text-base underline Nav-link'>Kuta</a>
                </Link>
            </li>
            <li className='inline-block m-3'>
                <Link to='/favorites'>
                    <FavoriteRoundedIcon sx={{ color: 'pink' , cursor: 'pointer','&:hover': { color: 'hotpink',}}} onClick={printHeart}/>
                </Link>
            </li>
            </ul>
        </nav>
    )
}

export default Nav;

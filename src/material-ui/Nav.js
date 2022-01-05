import React from 'react'
import { Typography } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Link } from 'react-router-dom'

import '../css/style.css';
import '../css/custom.css';
import '../css/general.css';

const Nav = () => {
    return (
            <nav className='flex justify-between py-3 mx-auto w-3/4'>
            <Typography variant='h4' component='h4' gutterBottom className="text-center">Travel Bali</Typography>
            <ul>
            <li className='inline-block m-3'>
                
                <Link to='/ubud'>
                    <a href="" className='text-xl underline Nav-link'>Ubud</a>
                </Link>
            </li>
            <li className='inline-block m-3'>
                <Link to='/denpasar'>
                    <a href="" className='text-xl underline Nav-link'>Denpasar</a>
                </Link>
            </li>
            <li className='inline-block m-3'>
                <Link to='/kuta'>
                    <a href="" className='text-xl underline Nav-link'>Kuta</a>
                </Link>
            </li>
            <li className='inline-block m-3'>
                <FavoriteRoundedIcon sx={{ color: 'pink' , cursor: 'pointer','&:hover': { color: 'hotpink',}}}/>

            </li>
            </ul>
        </nav>
    )
}

export default Nav;

import React from 'react'
import { Typography } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
            <nav className='flex justify-between py-3 mx-auto w-3/4'>
            <Typography variant='h4' component='h4' gutterBottom className="text-center">Travel Bali</Typography>
            <ul>
            <li className='inline-block m-3'>
                
                <Link to='/ubud'>
                    <a href="" className='text-xl hover:text-gray-300 hover:underline'>Ubud</a>
                </Link>
            </li>
            <li className='inline-block m-3'>
                <Link to='/denpasar'>
                    <a href="" className='text-xl hover:text-gray-300 hover:underline'>Denpasar</a>
                </Link>
            </li>
            <li className='inline-block m-3'>
                <Link to='/kuta'>
                    <a href="" className='text-xl hover:text-gray-300 hover:underline'>Kuta</a>
                </Link>
            </li>
            <li className='inline-block m-3'>
                <FavoriteRoundedIcon/>

            </li>
            </ul>
        </nav>
    )
}

export default Nav;

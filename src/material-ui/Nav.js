import React, { useState } from 'react'
import { Typography } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Link } from 'react-router-dom'

import '../css/style.css';
import '../css/custom.css';
import '../css/general.css';
import content from '../assets/content/content.json'


//GET DESTINATIONS FROM JSON: 
const potlocations = []
for(var i in content){
  potlocations.push(i)
}



const Nav = (props) => {
    const printHeart = () => {
        //console.log(props.heart)
    }

    //navigation appears on hoverstate
    const [navBtn, setNavBtn] = useState(false);
    function handleChange() {
        setNavBtn(!navBtn);
    }

    //TESTING GIT 123

    return (
            <nav className='flex justify-between pt-8 pb-4 mx-auto w-3/4 items-center text-white Roboto tracking-widest'>
                <Link to='/' >
                    <Typography variant='h6' gutterBottom className="text-center">Travel Bali</Typography>
                </Link>
            <ul className='relative'>
                <li className='inline-block m-3 relative h-fit Nav-h-min' onMouseLeave={handleChange} onMouseEnter={handleChange}>
                        <button>Destinations</button>
                        <div className={`bg-white absolute top-12 left-0 ${navBtn === true ? 'block' : 'hidden'}`}>
                            <ul>
                                {potlocations.map( city => (
                                    <li className='inline-block m-3'>  
                                        <Link to={`/${city}`}  className='text-base underline Nav-link-destination capitalize'>
                                            {city}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    
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

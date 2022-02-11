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
            <nav className='flex w-4/5 m-auto py-2 justify-between VW-10 items-center tracking-widest'>
                <Link to='/' >
                    <span className="Special_Title font-bold text-center uppercase">Travel Bali</span>
                </Link>
                <div className='flex flex-row items-center'>
                <div className='inline-block m-3 relative h-fit Nav-h-min' onMouseLeave={handleChange} onMouseEnter={handleChange}>
                        <button className='uppercase Work-sans'>Destinations</button>
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
                </div>
                <a className='uppercase Work-sans tracking-normal m-4'>About us</a>
                <a className='uppercase Work-sans tracking-normal m-4'>Contact</a>

                <div className='inline-block m-3'>
                    <Link to='/favorites'>
                        <FavoriteRoundedIcon sx={{ color: 'pink' , cursor: 'pointer','&:hover': { color: 'hotpink',}}} onClick={printHeart}/>
                    </Link>
                </div>
                </div>
            
        </nav>
    )
}

export default Nav;

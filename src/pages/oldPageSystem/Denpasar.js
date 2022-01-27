import React, { useState} from 'react';
import PageTemplate from './PageTemplate';

//Video Banner, If you want banner, write if statement in page template pass props  {/*video = {video}*/}
//import video from '../assets/images/bali/culture.mp4'

const Denpasar = () => {
    const location = 'denpasar';

    //Feature cards info

    return (
        <div>
            <PageTemplate 
                city = {location}
            />
        </div>
    )
}

export default Denpasar;

import React, { useState} from 'react';
import PageTemplate from './PageTemplate';
//Video Banner, If you want banner, write if statement in page template pass props  {/*video = {video}*/}
//import video from '../assets/images/bali/culture.mp4'

//3 Feature Images
import Image1 from '../assets/images/denpasar/denpasar-elephant.jpg';
import Image2 from '../assets/images/denpasar/denpasar-fighter.jpg';
import Image3 from '../assets/images/denpasar/denpasar-lake.jpg';

const Denpasar = () => {
    const location = 'denpasar';

    //Feature cards info
    const [imgArr, setArr ] = useState([
        { title : 'Elephant', url: Image1}, 
        { title : 'Soldier', url: Image2},
        { title : 'Lake', url: Image3}
    ])
    //Feature Image [Title, SubTitle]
    const [feat, setFeat ] = useState([
        'Things to Do', 'Explore the top tourist destinations in the Southern Region of Ubud.'
    ])

    return (
        <div>
            <PageTemplate 
                city = {location}
                imgArr = {imgArr}
                imgFeat = {feat}
            />
        </div>
    )
}

export default Denpasar;

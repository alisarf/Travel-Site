import React, { useState} from 'react';
import PageTemplate from './PageTemplate';

//Video Banner, If you want banner, write if statement in page template pass props  {/*video = {video}*/}
//import Video from '../assets/images/bali/rice.mp4';

//3 Feature Images
import Image1 from '../assets/images/ubud/ubud-people.jpg';
import Image2 from '../assets/images/ubud/ubud-rice.jpg';
import Image3 from '../assets/images/ubud/ubud-swing.jpg';

const Ubud = () => {
    const location = 'ubud';

    //Feature cards info
    const [imgArr, setArr ] = useState([
        { title : 'Local Traditions', url: Image1}, 
        { title : 'Beautiful Rice Fields', url: Image2},
        { title : 'Swing through the Jungle', url: Image3}
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

export default Ubud;
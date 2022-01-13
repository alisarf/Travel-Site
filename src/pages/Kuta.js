import React, { useState} from 'react';
import PageTemplate from './PageTemplate';

//Video Banner, If you want banner, write if statement in page template pass props  {/*video = {video}*/}
import Video from '../assets/images/bali/surf.mp4'

//3 Feature Images
import Image1 from '../assets/images/kuta/Kuta-Beach.jpg';
import Image2 from '../assets/images/kuta/kuta-surf.jpg';
import Image3 from '../assets/images/kuta/Waterbom-Kuta.jpg';

const Kuta = () => {
    const location = 'kuta';

    //Feature cards info
    const [imgArr, setArr ] = useState([
        { title : 'Walk the beach shore', url: Image1}, 
        { title : 'Explore ancient traditions', url: Image2},
        { title : 'Spend the Day at the Waterpark', url: Image3}
    ])
    //Feature Image [Title, SubTitle]
    const [feat, setFeat ] = useState([
        'Things to Do', 'Explore the top tourist destinations in the Northern Region of Kuta.'
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

export default Kuta;
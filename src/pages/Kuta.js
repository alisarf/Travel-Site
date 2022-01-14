import React, { useState} from 'react';
import PageTemplate from './PageTemplate';

//Video Banner, If you want banner, write if statement in page template pass props  {/*video = {video}*/}
import Video from '../assets/images/bali/surf.mp4'

//3 Feature Images
import Image1 from '../assets/images/kuta/Kuta-Beach.jpg';
import Image2 from '../assets/images/kuta/kuta-surf.jpg';
import Image3 from '../assets/images/kuta/Waterbom-Kuta.jpg';

import {useLocation} from 'react-router-dom';


const Kuta = (props) => {
    const location = 'kuta';

    //Feature cards info
    const [imgArr, setArr ] = useState([
        { id: 6, title : 'Walk the beach shore', url: Image1}, 
        { id: 7, title : 'Explore ancient traditions', url: Image2},
        { id: 8, title : 'Spend the Day at the Waterpark', url: Image3}
    ])
    //Feature Image [Title, SubTitle]


    const [feat, setFeat ] = useState([
        'Things to Do', 'Explore the top tourist destinations in the Northern Region of Kuta.'
    ]);

    //required to pass data with other pages
    //must trigger a heart event and then navigate to kuta to see response in list prop
    let locations = useLocation();    //locations.state

    const printHeart = () => {
        console.log(locations.state)
    }




    return (
        <div>
            <PageTemplate 
                city = {location}
                imgArr = {imgArr}
                imgFeat = {feat}
            />
            <button  onClick={printHeart}> click heart</button>
        </div>
    )
}

export default Kuta;
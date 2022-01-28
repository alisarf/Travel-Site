import { Pagination, Typography } from '@mui/material';
import '../css/general.css';
import content from '../assets/content/content.json'

import FeatureCard from "./FeatureCard";

//REQUIRED PARENT PROP: title, subheadline
//Input: a list of image urls with featured text headline
//Output: synthesizes multiple cards via map

const FeatureCards = (props) => {
    
    //const data = ((JSON.parse(localStorage.getItem('data')) || ''));
    //const [elem, setElem] = useState(data);
    const imagesArr = content[props.location].images;

  // const fileUrlBase = `/images/${props.location}/${content[props.location].images[2].url}`
    return (
        <section className='my-10'>
            <Typography variant='h3' className='text-center' sx={{ fontWeight: '700'}}>{props.title}</Typography>
            <Typography variant='body1' className='text-center'>{props.subtitle}</Typography>
            <div className='my-5 flex justify-center FeatureCards_MQ'>
                {imagesArr.map( image => (
                    //wrap in link hook with location variable
                    
                    <FeatureCard url = {image.url} headline = {image.title} location={props.location}/>
                ))}
            </div>
            <div className='my-5'>
                <Pagination 
                    className = "m-auto my-10" 
                    count={5} variant="outlined" 
                    color="primary" 
                />
            </div>
            
            
            

        </section>
    )
}

export default FeatureCards;
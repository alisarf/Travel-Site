import { Pagination, Typography } from '@mui/material';
import '../css/general.css';
import content from '../assets/content/content.json'


import FeatureCard from "./FeatureCard";
import TitleHead from './TitleHead';
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
            {/*<TitleHead title = "Get Outside" nav = 'articles'/>*/}
            <p className='text-center mb-12 Work_sans'>{props.subtitle}</p>
            <div className='grid-col-1to3 my-5 mx-auto w-full flex flex-col justify-center gap-8 items-center sm:grid sm:grid-cols-2 lg:grid-cols-3'>
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
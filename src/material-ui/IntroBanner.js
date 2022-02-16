//Default image:
import ImgBanner from '../assets/images/bali/headbanner.jpg';
import palmLeaf from '../assets/images/media/palm/palm_leaf_shadow.svg';
import content from '../assets/content/content.json'
import { Typography, Button } from '@mui/material';

//REQUIRED PROPS : Title

const IntroBanner = (props) => {
    const navArr = props.navArr;
    //const introImg = ;
    //const introImgPath = `/images/${props.location}/${content[props.location].general.imageUrl}`;

    //const description = content[props.location].general.description;

    return (
        <section className="flex flex-col h-auto m-auto overflow-hidden Section_Container md:flex-row">
            <div className='Accent_Bg w-full relative p-8 md:w-3/5 md:p-16'>
                <h1 className='text-white font-bold Roboto_Condensed uppercase text-6xl mb-8 text-center md:text-left'>{props.location ? props.location : 'Bali'}</h1>
                <p className='text-white text-center md:text-left'>{props.location ? (content[props.location].general.description) : 'Ut anim ad aliqua fugiat excepteur nulla eiusmod eu.'}</p>
                <img className='absolute Palm_leaf' src={palmLeaf}/>
            </div>
            <div className='h-auto w-full bg-cover bg-center py-8 md:w-2/5 p-auto'  style={{ minHeight: '30vw', backgroundImage: `url(${props.location ?  `/images/${props.location}/${content[props.location].general.imageUrl}` : ImgBanner})` }}>
                <div className='flex flex-col justify-center m-auto w-fit h-full'>
                    <ul className=''>

                        {navArr ? navArr.map( section => (
                            <li className='m-2'>
                                <a href={`#${section.ref}`}>
                                    <span className='font-bold text-white mr-4 text-sm'>0{section.id}.</span>
                                    <h3 className='inline Black LetterSpacing uppercase'>{section.title}</h3>
                                </a>
                            </li>
                                    )) : '' }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default IntroBanner;
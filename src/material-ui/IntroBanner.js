//Default image:
import ImgBanner from '../assets/images/bali/headbanner.jpg';
import palmLeaf from '../assets/images/media/palm/palm_leaf_shadow.svg';
import content from '../assets/content/content.json'
import { Typography, Button } from '@mui/material';

//REQUIRED PROPS : Title

const IntroBanner = (props) => {
    const navArr = props.navArr;

        //Smooth Scroll
        function scroll(ref) {
            ref.current.scrollIntoView({behavior: 'smooth'})
        }
    

    return (
        <section className="flex flex-col h-auto m-auto overflow-hidden mb-12 Section_Container md:flex-row md:mb-20">
            <div className='Accent_Bg w-full relative p-8 overflow-hidden md:w-3/5 md:p-16'>
                <h1 className='relative z-10 text-white font-bold Roboto_Condensed uppercase text-5xl mb-8 text-center md:text-6xl md:text-left'>{props.location ? props.location : 'Explore'}</h1>
                <p className='relative z-10 text-white text-center md:text-left'>{props.location ? (content[props.location].general.description) : 'Ut anim ad aliqua fugiat excepteur nulla eiusmod eu.'}</p>
                <img className='absolute Palm_leaf' src={palmLeaf}/>
            </div>

            <div className='relative h-auto w-full bg-cover bg-center py-8 md:w-2/5 p-auto'  style={{ minHeight: '30vh', backgroundImage: `url(${props.location ?  `/images/${props.location}/${content[props.location].general.imageUrl}` : ImgBanner})` }}>
            <div className='z-0 absolute top-0 bg-gradient-to-t opacity-70 from-gray-900 via-transparent-20 to-transparent trans transition-opacity w-full h-full'></div>
                <div className='relative flex flex-col justify-center m-auto w-fit h-full'>
                    <ul>
                        {navArr ? navArr.map( section => (
                            <li className='m-2'>
                                <a href={`#${section.ref}`} className='scroll-smooth'>
                                    <span className='opacity-90 text-white Roboto_Condensed font-extrabold mr-4 text-sm'>0{section.id}.</span>
                                    <h3 className='inline text-white LetterSpacing font-thin uppercase'>{section.title}</h3>
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
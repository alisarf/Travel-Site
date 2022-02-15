//Default image:
import ImgBanner from '../assets/images/bali/headbanner.jpg';
import palmLeaf from '../assets/images/media/palm/palm_leaf_shadow.svg';

import { Typography, Button } from '@mui/material';

//REQUIRED PROPS : Title

const IntroBanner = (props) => {
    const navArr = props.navArr;
    return (
        <section className="flex flex-row h-auto w-4/5 m-auto overflow-hidden rounded-2xl shadow-lg">
            <div className='Accent_Bg w-3/5 p-16 relative'>
                <h1 className='text-white font-bold Roboto_Condensed uppercase text-6xl mb-8'>Ubud</h1>
                <p className='text-white'>Labore duis amet ut elit laboris et dolore occaecat sit ut.Aliqua qui in laborum eu enim aute nostrud et ex eu mollit.</p>
                <img className='absolute Palm_leaf' src={palmLeaf}/>
            </div>
            <div className='h-auto w-2/5 bg-cover bg-center'  style={{ backgroundImage: `url(${props.image ? props.image : ImgBanner})` }}>
                <div className='flex flex-col justify-center m-auto w-fit h-full'>
                    <ul className=''>

                        {navArr ? navArr.map( section => (
                            <li className='m-2'>
                                <a href={`#${section.ref}`}>
                                    <span className='font-bold Font_dk_slate mr-4 text-sm'>0{section.id}.</span>
                                    <h3 className='inline Black LetterSpacing'>{section.title}</h3>
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
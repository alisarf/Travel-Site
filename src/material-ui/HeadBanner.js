import { Typography } from "@mui/material";
import Nav from '../material-ui/Nav';

//Default image:
import ImgBanner from '../assets/images/ubud/ubud-banner.jpg';

//REQUIRED PROPS : Title

const HeadBanner = (props) => {
    return (
        <section>
            <Nav heart = {props.elem}/>
            <div className='flex-col justify-center w-full half_vh'>
            </div>
            <div className='Frost half_vh'>
            </div>
            <div className='Heroimage half_vh flex justify-center'  style={{ backgroundImage: `url(${props.image ? props.image : ImgBanner})` }}>
            <h3 className='Font_brushy self-center text-7xl text-white z-10 capitalize sm:text-7xl md:text-8xl lg:text-9xl'>{props.title}</h3>
            </div>
        </section>
    )
}

export default HeadBanner;
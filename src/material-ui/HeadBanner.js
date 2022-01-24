import { Typography } from "@mui/material";
import Nav from '../material-ui/Nav';

//Default image:
import ImgBanner from '../assets/images/ubud/ubud-banner.jpg';

//REQUIRED PROPS : Title

const HeadBanner = (props) => {
    return (
        <section className="Headbanner relative">
            <Nav heart = {props.elem}/>
            
            <div className='flex-col justify-center w-full half_vh'>
            </div>
            <div className='Frost half_vh'>
            </div>
            <div className='Heroimage half_vh flex justify-center'  style={{ backgroundImage: `url(${props.image ? props.image : ImgBanner})` }}>
               
            </div>

            
        </section>
    )
}

export default HeadBanner;
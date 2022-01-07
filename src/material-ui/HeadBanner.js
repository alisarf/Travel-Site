import { Typography } from "@mui/material";
import Nav from '../material-ui/Nav';

//REQUIRED PROPS : Title

const HeadBanner = (props) => {
    return (
        <section>
            <Nav/>
            <div className='flex-col justify-center w-full half_vh'>
            </div>
            <div className='Frost half_vh'>
            </div>
            <div className='Heroimage half_vh flex justify-center'  style={{ backgroundImage: `url(${props.image})` }}>
            <h3 className='Font_brushy text-9xl self-center text-white z-10'>{props.title}</h3>
            </div>
        </section>
    )
}

export default HeadBanner;
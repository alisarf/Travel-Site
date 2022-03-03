import Nav from '../material-ui/Nav';

//Default image:
import ImgBanner from '../assets/images/bali/headbanner.jpg';

//REQUIRED PROPS : Title

const HeadBanner = (props) => {
    return (
        <section className="Headbanner relative">
            <Nav heart = {props.elem}/>

            
        </section>
    )
}

export default HeadBanner;
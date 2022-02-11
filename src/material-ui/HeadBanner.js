import Nav from '../material-ui/Nav';

//Default image:
import ImgBanner from '../assets/images/bali/headbanner.jpg';

//REQUIRED PROPS : Title

const HeadBanner = (props) => {
    return (
        <section className="Headbanner relative">
            <Nav heart = {props.elem}/>
            {/*
            <div className='Heroimage half_vh flex flex-col justify-center'  style={{ backgroundImage: `url(${props.image ? props.image : ImgBanner})` }}>
               <h3 className='Text-shadow text-5xl text-white font-bold text-center my-4 Roboto_Condensed'>Ubud</h3>
                <p className='text-white text-center w-1/4 mx-auto Work_sans bg-gray-700 opacity-50'>Ea ipsum ut consectetur aliqua velit aliqua in do laboris velit velit quis cupidatat aliquip.</p>
            </div>
            */}
            
        </section>
    )
}

export default HeadBanner;
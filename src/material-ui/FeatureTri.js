import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@mui/material';
import '../css/general.css'
import content from '../assets/content/content.json';
//INPUT PROPS: font awesome icon name, must be imported within parent hook.
import { faTaxi, faBus, faPlane } from '@fortawesome/free-solid-svg-icons'

const FeatureTri = (props) => {
    const travel = content[props.location].transport_time;

    function iconCheck(icon) {
        if (icon === 'taxi') {
            return faTaxi
        } else if (icon === 'bus') {
            return faBus
        } else if (icon === 'airplane') {
            return faPlane
        } else {
            return faTaxi
        }
    }
    return (
        <section className='my-10'>
            <Typography variant='h5' className='text-center' sx={{ fontWeight: '700'}}>How to Get Around</Typography>
            <div className='flex justify-evenly my-10'>
                {travel.map(mode => (
                    <div className='flex flex-col'>
                        
                        <FontAwesomeIcon icon= {iconCheck(mode.type)}  className= 'mx-auto' style={{ width:'50px' , height:'50px', color:'black'}}/>
                        <Typography variant='h6' className='text-center my-2 uppercase' sx={{ fontWeight: '700', margin: '0.5rem auto', fontFamily: 'Roboto Condensed'}}>{mode.type}</Typography>
                        <h6 className='text-center '>{mode.time}</h6>
                        <h6 className='text-center '>{mode.cost}</h6>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeatureTri;
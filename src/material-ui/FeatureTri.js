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
                        <FontAwesomeIcon icon= {iconCheck(mode.type)}  className= 'mx-auto my-4' style={{ width: 'calc(50px + 3rem)' , height:'calc(50px + 3rem)', backgroundColor: '#57bdb780', borderRadius:'50px', padding: '1.8rem'}}/>
                        <Typography variant='h5' className='text-center my-2' sx={{ fontWeight: '700', margin: '0.5rem auto', textTransform: 'capitalize'}}>{mode.type}</Typography>
                        <h6 className='text-center text-gray-400'>Avg Travel Time: {mode.time}</h6>
                        <h6 className='text-center text-gray-400'>{mode.cost}</h6>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeatureTri;
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

import { Typography } from '@mui/material';
import '../css/general.css'

const FeatureTri = (props) => {
    return (
        <section className='my-10'>
            <Typography variant='h5' className='text-center' sx={{ fontWeight: '700'}}>How to Get Around</Typography>
            <div className='flex justify-evenly my-10'>
                <div className='flex flex-col'>
                    <LocalTaxiIcon className= 'mx-auto my-4' sx={{ width: 'calc(50px + 3rem)' , height:'calc(50px + 3rem)', backgroundColor: '#57bdb780', borderRadius:'50px', padding: '1.5rem'}}/>
                    <Typography variant='h5' className='text-center my-2' sx={{ fontWeight: '700', margin: '0.5rem auto'}}>Taxi</Typography>
                    <h6 className='text-center text-gray-400'>Avg Travel Time: 10m</h6>
                    <h6 className='text-center text-gray-400'>$10</h6>
                </div>
                <div className='flex flex-col'>
                    <DirectionsBusIcon className= 'mx-auto my-4' sx={{ width: 'calc(50px + 3rem)' , height:'calc(50px + 3rem)', backgroundColor: '#57bdb780', borderRadius:'50px', padding: '1.5rem'}}/>
                    <Typography variant='h5' className='text-center my-2' sx={{ fontWeight: '700', margin: '0.5rem auto'}}>Bus</Typography>
                    <h6 className='text-center text-gray-400'>Avg Travel Time: 1h 30m</h6>
                    <h6 className='text-center text-gray-400'>$15</h6>
                </div>
                <div className='flex flex-col'>
                    <AirplanemodeActiveIcon className= 'mx-auto my-4' sx={{ width: 'calc(50px + 3rem)' , height:'calc(50px + 3rem)', backgroundColor: '#57bdb780', borderRadius:'50px', padding: '1.5rem'}}/>
                    <Typography variant='h5' className='text-center' sx={{ fontWeight: '700', margin: '0.5rem auto'}}>Plane</Typography>
                    <h6 className='text-center text-gray-400'>Avg Travel Time: 30m</h6>
                    <h6 className='text-center text-gray-400'>$20</h6>
                </div>
            </div>
        </section>
    )
}

export default FeatureTri;
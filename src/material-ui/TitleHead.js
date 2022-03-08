import '../css/general.css';
import { Typography } from '@mui/material';

const TitleHead = (props) => {
    const margins = {margin: '3rem auto 0 auto', width: '75%', textTransform: 'capitalize' };
    return (
        <section id={props.nav}>
            <div className='mx-auto mb-8 text-4xl md:text-5xl'>
                <h2 className='Dark Divider text-center capitalize'>{props.title}</h2>
            </div>
        </section>
    )
}

export default TitleHead;
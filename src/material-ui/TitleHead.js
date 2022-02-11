import '../css/general.css';
import { Typography } from '@mui/material';

const TitleHead = (props) => {
    const margins = {margin: '3rem auto 0 auto', width: '75%', textTransform: 'capitalize' };
    return (
        <section id={props.nav}>
            <div className='m-auto'>
                <h2 className='Divider text-center capitalize'>{props.title}</h2>
                <div>

                </div>
            </div>
        </section>
    )
}

export default TitleHead;
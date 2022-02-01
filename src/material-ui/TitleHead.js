import '../css/general.css';
import { Typography } from '@mui/material';

const TitleHead = (props) => {
    const margins = {margin: '3rem auto 0 auto', width: '75%', textTransform: 'capitalize' };
    return (
        <section id={props.nav}>
            <div className='m-auto'>
                <Typography gutterBottom variant="h4" className='Condensed uppercase text-center Divider'
                sx={{
                    fontWeight: 700,
                    fontFamily: "Roboto Condensed"
                }}
                >{props.title}</Typography>
                <div>

                </div>
            </div>
        </section>
    )
}

export default TitleHead;
import { Divider, Typography } from "@mui/material";
import '../css/general.css';

const Divide = (props) => {
    const margins = {margin: '3rem auto 0 auto', width: '75%', textTransform: 'capitalize' };
    return (
        <section id={props.nav}>
            <Divider sx ={margins} className="gap-4">
                <Typography gutterBottom variant="h4" className='Accent uppercase font-bold'>{props.title}</Typography>
                <Typography variant = 'h5' className='text-center Accent'>Traveling Bali</Typography>
            </Divider>
        </section>
    )
}

export default Divide;
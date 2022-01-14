import { Divider, Typography } from "@mui/material";
import '../css/general.css';

const Divide = (props) => {
    const margins = {margin: '3rem auto', width: '75%', textTransform: 'capitalize' };
    return (
        <Divider sx ={margins}>
            <Typography gutterBottom variant="h4" className='Condensed'>{props.title}</Typography>
        </Divider>
    )
}

export default Divide;
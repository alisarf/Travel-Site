import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';


//Requires following props: image and headline text

const FeatureCard = (props) => {
    return (
        <Card 
            sx={{ maxWidth: 345 }}
            className = 'inline-block m-4'
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="450px"
                    image= {props.image}
                    alt="green iguana"
                    className='relative'
                    sx={{ height: '450px', width: '350px' }}
                />
                <Typography 
                    gutterBottom variant="h6"
                    component="div" 
                    className='absolute bottom-0 left-4 text-white'
                >
                    {props.headline}
                </Typography>
            </CardActionArea>
        </Card>
    )
};

export default FeatureCard;
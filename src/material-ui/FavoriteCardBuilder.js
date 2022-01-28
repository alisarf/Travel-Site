import {Card, CardMedia, Typography, CardContent } from '@mui/material';


function FavoriteCardBuilder (props) {

    return (
        <Card sx={{ maxWidth: 345 }}  className="mx-auto">
        <CardMedia
          component="img"
          alt="green iguana"
          height="100px"
          image= {props.image}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lorem Ipsum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Laborum et sit cupidatat in amet cillum do aliqua occaecat est dolor tempor ipsum.
            Laborum et sit cupidatat in aliqua occaecat est dolor tempor ipsum.
          </Typography>
        </CardContent>
      </Card>
    );
}

export default FavoriteCardBuilder;
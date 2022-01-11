import React, { useState} from 'react';
import ProgressBar from "./ProgressBar";
import { Card } from "@mui/material";

const ProgressBarBox = () => {
    const [arr, setArr ] = useState([
        { title : 'Cost', value: 50}, 
        { title : 'Safety', value: 80},
        { title : 'Fun', value: 100}
    ])

    return(
        <Card  sx={{ display: 'flex', flexDirection: "column", gap: "1rem", justifyContent: 'center', width: '200px', backgroundColor:'#e0f2f1'}}>
            {arr.map(stat => (
                <ProgressBar title = {stat.title} value = {stat.value} />
            ))}
        </Card>
        
    )
}

export default ProgressBarBox;
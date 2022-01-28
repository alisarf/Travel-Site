import ProgressBar from "./ProgressBar";
import { Card } from "@mui/material";
import content from "../assets/content/content.json"

const ProgressBarBox = (props) => {
    const arr = content[props.location].factors;
    return(
        <Card  sx={{ display: 'flex', flexDirection: "column", gap: "1rem", justifyContent: 'center', width: '200px', backgroundColor:'#e0f2f1'}}>
            {arr.map(factor => (
                <ProgressBar title = {factor.title} value = {factor.value} />
            ))}
        </Card>
        
    )
}

export default ProgressBarBox;
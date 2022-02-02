import ProgressBar from "./ProgressBar";
import content from "../assets/content/content.json"

const ProgressBarBox = (props) => {
    const arr = content[props.location].factors;
    return(
        <section className="Grey_lt" style={{ display: 'flex', flexDirection: "column", gap: "1rem", justifyContent: 'center', width: '200px', backgroundColor:'#fafafa'}}>
            {arr.map(factor => (
                <ProgressBar title = {factor.title} value = {factor.value} />
            ))}
        </section>
        
    )
}

export default ProgressBarBox;
import { Typography } from "@mui/material";
import content from "../assets/content/content.json"

//INPUT: location
//OUTPUT: Returns all paragraph content

const SectionParaMulti = (props) => {
    return (
        <section>
            {content[props.location][props.info].map( article => (
                <div className="Accent_Bg_Lt my-4 p-4 last-of-type:mr-6 mt-4">
                    <h4 className='uppercase Accent py-4' variant='h2'>{article.title}</h4>
                    <p className='Black Para'>{article.text}</p>
                </div>
            ))}
        </section>
    )
}

export default SectionParaMulti;
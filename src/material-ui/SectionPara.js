import { Typography } from "@mui/material";
import content from "../assets/content/content.json"

//INPUT: location
//OUTPUT: Returns all paragraph content

const SectionPara = (props) => {
    return (
        <section className="w-3/4 mx-auto">
            {content[props.location][props.info].map( article => (
                <div className=" my-8">
                    <Typography className='Header_lh' variant='h5' sx={{ fontWeight: '700', margin: '1rem auto' }}>{article.title}</Typography>
                    <p className='text-black-400 Para'>{article.text}</p>
                </div>
            ))}
        </section>
    )
}

export default SectionPara;
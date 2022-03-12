import { Typography } from "@mui/material";
import content from "../assets/content/content.json";

//INPUT: location
//OUTPUT: Returns all paragraph content

const SectionPara = (props) => {
  return (
    <section className="mx-auto Accent_Bg p-12">
      {content[props.location][props.info].map((article) => (
        <div className="">
          <h4 className="uppercase text-white" variant="h2">
            {article.title}
          </h4>
          <p className="text-white">{article.text}</p>
        </div>
      ))}
    </section>
  );
};

export default SectionPara;

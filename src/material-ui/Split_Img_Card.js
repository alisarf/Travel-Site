import { Typography } from "@mui/material";

{
  /*
Left div 4 images, right div text card
Input: array with 4 image objects consisting of url and title
[{ "title" : "lorem", "url": "ipsum.jpg"},{ "title" : "lorem", "url": "ipsum.jpg"}] 
*/
}

const Split_Img_Card = ({ imgArr, header, subheader }) => {
  return (
    <section className="relative grid  grid-rows-2 mx-auto w-container mb-12 md:mb-20 md:grid-cols-3 md:grid-rows-1">
      <div
        className="Split_Img_Card__vh grid grid-cols-2 grid-rows-2 mx-auto w-full rounded-t-2xl overflow-hidden md:rounded-2xl"
        style={{}}
      >
        {imgArr.map((item) => (
          <div className="relative h-fit overflow-hidden flex flex-col justify-center aspect-square">
            <img
              className="w-full h-auto absolute"
              src={`/images/ubud/${item.url}`}
            />
            <div className="z-0 absolute top-0 left-0 cursor-pointer bg-gradient-to-t opacity-50 from-gray-900 via-transparent-20 to-transparent trans transition-opacity hover:opacity-0 w-full h-full"></div>
          </div>
        ))}
      </div>

      <div className="mb-auto mx-auto w-full p-16 bg-white border rounded-b-xl flex flex-col justify-center items-baseline shadow-lg SidePanel md:my-auto md:rounded-r-xl">
        <div className=" my-0">
          <h2 className="Divider text-left capitalize text-4xl md:text-5xl ">
            {header}
          </h2>
        </div>
        <Typography variant="body1" className="Work_sans Black">
          {subheader}
        </Typography>
      </div>
    </section>
  );
};

export default Split_Img_Card;

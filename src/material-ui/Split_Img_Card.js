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
    <section className="relative grid grid-cols-3 mx-auto w-container mb-12 md:mb-20">
      <div
        className="grid grid-cols-2 grid-rows-2 mx-auto col-span-2 w-full rounded-2xl overflow-hidden"
        style={{ height: "50vh" }}
      >
        {imgArr.map((item) => (
          <div className="relative h-fit overflow-hidden flex flex-col justify-center">
            <img
              className="w-full h-auto absolute"
              src={`/images/ubud/${item.url}`}
            />
            <div className="z-0 absolute top-0 left-0 cursor-pointer bg-gradient-to-t opacity-50 from-gray-900 via-transparent-20 to-transparent trans transition-opacity hover:opacity-0 w-full h-full"></div>
          </div>
        ))}
      </div>
      <div className="my-auto px-16 bg-white h-4/5 border rounded-r-xl flex flex-col justify-center items-baseline shadow-lg SidePanel">
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

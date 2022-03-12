import RadioGroupRating from "./rating";

const Feedback = ({ msg }) => {
  return (
    <section
      className="p-16 text-center relative Accent_Bg bottom-4 w-container mx-auto rounded-2xl"
      style={{ top: "5vw", maxWidth: "1280px" }}
    >
      <h3 className="text-white">{msg}</h3>
      <RadioGroupRating />
      {/*<div className='absolute w-full top-0' style={{zIndex:-1}}><img src={palm_leaf} className='m-auto w-40'/></div>*/}
    </section>
  );
};

export default Feedback;

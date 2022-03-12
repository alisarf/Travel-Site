import ProgressBarBox from "../material-ui/ProgressBarBox";
import img from "../assets/images/kuta/Kuta-Beach.jpg";

//Weather API
import Weather from "../material-ui/Weather";

const DashCard = (props) => {
  const location = props.location;
  return (
    <section className="rounded-2xl m-auto h-full overflow-hidden shadow-lg">
      <div
        className="h-2/5 p-8 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image ? props.image : img})` }}
      >
        <span className="w-20 h-20 absolute bottom-0 right-0">
          <h5 className="text-white uppercase text-sm">Cloudy</h5>
          <h5 className="text-white uppercase text-4xl">80{"\u00b0"}</h5>
        </span>
      </div>
      <div className="h-3/5 flex flex-col justify-evenly bg-white p-8">
        <span className="Tag">Asia</span>
        <h3>{location}, Indonesia</h3>
        <ProgressBarBox location={location} />
        <button className="Primary_Btn">Learn More</button>
      </div>
    </section>
  );
};

export default DashCard;

import ProgressBar from "./ProgressBar";
import content from "../assets/content/content.json";

const ProgressBarBox = (props) => {
  const arr = content[props.location].factors;
  return (
    <section className="w-full flex flex-col gap-4 justify-center">
      {arr.map((factor) => (
        <ProgressBar title={factor.title} value={factor.value} />
      ))}
    </section>
  );
};

export default ProgressBarBox;

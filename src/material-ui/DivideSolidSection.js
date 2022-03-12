import arrow from "../assets/images/media/arrow.svg";
import TitleHead from "./TitleHead";
const DivideSolidSection = ({ msg, title }) => {
  return (
    <section className="">
      <div className="w-container pt-8 pb-28 p-container md:pt-20 md:pb-40 flex flex-col justify-between m-auto text-center lg:w-2/5 lg:flex-col">
        <TitleHead title={title} />
        <p className="Dark Black w-full font-semibold lg:mt-4">
          {msg}
          <a className="cursor-pointer Roboto_Condensed tracking-wider font-extrabold block mt-4 Accent_Active">
            Learn more about this here{" "}
            <img src={arrow} className="w-6 inline-block" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default DivideSolidSection;

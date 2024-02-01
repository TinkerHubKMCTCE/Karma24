import karma24 from "../../../../assets/karma24.svg";
import budha from "../../../../assets/budha.svg"
import styles from "./Hero.module.css";
import Countdown from "../Countdown/Countdown";

const Hero = () => {
  const targetDate = new Date("2024-03-01T00:00:00");

  return (
    <div className="container mx-auto px-10">
      <div id={styles.hero} className="min-h-screen flex flex-col">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-6"  id={styles.title}>
          <div className="grid place-items-center mt-12">
            <img className="max-w-xl mx-auto w-full" src={karma24} alt="KARMA'24" />
            <p className="mt-6 font-inversionz text-center text-3xl uppercase font-medium">
              what goes around comes around
            </p>
            <button className="bg-[#09D3FF] hover:bg-[#8EFF09] text-black font-bold text-lg py-2 px-10 tracking-wide rounded-xl place-items-center mt-8 ">
              Buy Tickets
            </button>
          </div>
          <div>
            <img className="max-w-xl mx-auto mt-6 w-full" src={budha} alt="budha" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 md:gap-10 max-w-2xl mx-auto">
          <Countdown targetDate={targetDate} title="Days" />
          <Countdown targetDate={targetDate} title="Hours" />
          <Countdown targetDate={targetDate} title="Minutes" />
          <Countdown targetDate={targetDate} title="Seconds" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;

import Countdown from "../Countdown/Countdown";
import FilledButton from "../../../../components/FilledButton";

import karma24 from "../../../../assets/karma24.svg";
import budha from "../../../../assets/images/Buddha.svg";
import heroBg from "../../../../assets/hero-bg.svg";

const Hero = () => {
  const targetDate = new Date("2024-03-01T00:00:00");

  return (
    <section
      className="bg-opacity-50 bg-black"
      style={{
        background: `url(${heroBg}) no-repeat center center/cover`,
      }}
    >
      <div className="container mx-auto pb-20">
        <div className="h-fit flex flex-col">
          <div className="">
            <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-6 px-8 pb-12 lg:pb-32">
              <div className="grid place-items-center mt-12 z-20">
                <img className="max-w-xl mx-auto w-full" src={karma24} alt="KARMA'24" />
                <p className="mt-6 font-inversionz text-center text-3xl uppercase font-medium tracking-tighter">
                  what goes around comes around
                </p>
                <FilledButton text="Buy Tickets" />
              </div>
              <div>
                <img
                  className="max-w-xl mx-auto mt-6 w-full scale-150 mix-blend-screen"
                  src={budha}
                  alt="budha"
                />
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
    </section>
  );
};

export default Hero;

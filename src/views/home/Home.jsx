import Hero from "./components/Hero/Hero";
import AmbassadorsSection from "./components/Ambassadors/Ambassadors";
import WorkshopsSection from "./components/Workshops/Workshops";
import EventsSection from "./components/Events/EventsSection";
import GamesSection from "./components/Games/GamesSection";
import SpotLight from "./components/SpotLight";

const Home = () => {
  return (
    <>
      <Hero />
      <AmbassadorsSection />
      <EventsSection />
      <WorkshopsSection />
      <GamesSection />
      <SpotLight />
    </>
  );
};

export default Home;

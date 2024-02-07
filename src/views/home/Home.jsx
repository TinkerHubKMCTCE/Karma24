import Hero from "./components/Hero/Hero";
import AmbassadorsSection from "./components/Ambassadors/Ambassadors";
import WorkshopsSection from "./components/Workshops/Workshops";
import EventsSection from "./components/Events/EventsSection";
import GamesSection from "./components/Games/GamesSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AmbassadorsSection />
      <EventsSection />
      <WorkshopsSection />
      <GamesSection />
    </>
  );
};

export default Home;

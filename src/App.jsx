import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Ambassadors from "./components/Ambassadors/Ambassadors";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Ambassadors />
    </div>
  );
}

export default App;

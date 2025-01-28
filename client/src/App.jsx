import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";

import EdNEx from "./components/EdNEx";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex font-funnel  ">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden bg-gradient-to-br cool-scroll">
        <HeroSection />
        <Skills />
        <EdNEx />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

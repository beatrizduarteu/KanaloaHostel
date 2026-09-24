import Hero from "../components/Hero.tsx";
import Intro from "../components/Intro.tsx";
import House from "../components/House.tsx";

function Home() {

  return (
    <div>
      {/* 1. Secção Principal (Surf / Praia) */}
      <Hero />
      <Intro />
      <House />

    </div>
  );
}

export default Home;
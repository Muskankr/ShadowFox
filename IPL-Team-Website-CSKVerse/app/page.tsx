import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TeamOverview from "../components/TeamOverview";
import Squad from "../components/Squad";
import MatchSchedule from "../components/MatchSchedule";
import Stats from "../components/Stats";
import FanZone from "../components/FanZone";
import News from "../components/News";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <main className="bg-[#041B3A] text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <TeamOverview />

      <Squad />

      <MatchSchedule />

      <Stats />

      <FanZone />

      <News />

      <Footer />

      <BackToTop />

    </main>
  );
}

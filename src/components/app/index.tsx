
import ChessClock from "components/ChessClock";
import Footer from "components/Footer";
import HowWeWork from "components/HowWeWork";
import Landing from "components/Landing";
import Mantra from "components/Mantra";
import V18 from "components/V18";

export default () => (
  <>
    <Landing />
    <div id="portfolio"><V18 /></div>
    <HowWeWork />
    <ChessClock />
    <Mantra />
    <Footer />
  </>
);

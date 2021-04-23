
import ChessClock from "components/ChessClock";
import Footer from "components/Footer";
import HowWeWork from "components/HowWeWork";
import Landing from "components/Landing";
import Mantra from "components/Mantra";
import V18 from "components/V18";

export default () => (
  <>
    <div id="landing"><Landing /></div>
    <div id="react"><V18 /></div>
    <div id="howwework"><HowWeWork /></div>
    <div id="pwa"><ChessClock /></div>
    <div id="mantra"><Mantra /></div>
    <Footer />
  </>
);


import V18 from "components/V18";
import Mantra from "components/Mantra";
import HowWeWork from "components/HowWeWork";
import Footer from "components/Footer";
import ChessClock from "components/ChessClock";
import NineAgency from "components/NineAgency";

export default () => (
  <>
    <div id="portfolio">
      <div id="react"><V18 /></div>
      <div id="pwa"><ChessClock /></div>
      <div id="codesplitting"><NineAgency /></div>
    </div>
    <div id="mantra"><Mantra /></div>
    <div id="footer"><Footer /></div>
  </>
);


import V18 from "components/V18";
import Mantra from "components/Mantra";
import Footer from "components/Footer";
import ChessClock from "components/ChessClock";
import NineAgency from "components/NineAgency";
import Grid from "components/Grid";
import { useEffect } from "react";
import intersectionObserverSetup from "intersectionObserverSetup";

export default () => {
  useEffect(intersectionObserverSetup, [])
  
  return (
    <>
      <div id="portfolio">
        <Grid><h1>Featured projects.</h1></Grid>
        <div id="react"><V18 /></div>
        <div ><div id="pwa"><ChessClock /></div></div>
        <div><div id="codesplitting"><NineAgency /></div></div>
      </div>
      <div id="mantra"><Mantra /></div>
      <div id="footer"><Footer /></div>
    </>
  );
}

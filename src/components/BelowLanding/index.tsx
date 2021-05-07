
import V18 from "components/V18";
import Mantra from "components/Mantra";
import Footer from "components/Footer";
import ChessClock from "components/ChessClock";
import NineAgency from "components/NineAgency";
import Grid from "components/Grid";
import { useEffect } from "react";

const options = {}

const callback: IntersectionObserverCallback = (entries, _observer) => {
  entries.filter(entry => entry.isIntersecting).map(entry => {
    (entry as any).target.style.animation = "translateY var(--fast-animation-duration) forwards ease-in-out";
  })
}

const observer = new IntersectionObserver(callback, options)

export default () => {
  useEffect(() => {
    document.querySelectorAll("#animateableSection").forEach(entry => {
      observer.observe(entry)
    })
    return () => {
    }
  }, [])
  return (
    <>
      <div id="portfolio">
        <div id="animateableSection">
          <Grid><h1>Featured projects.</h1></Grid>
          <div id="react"><V18 /></div>
        </div>
        <div id="animateableSection"><div id="pwa"><ChessClock /></div></div>
        <div id="animateableSection"><div id="codesplitting"><NineAgency /></div></div>
      </div>
      <div id="animateableSection"><div id="mantra"><Mantra /></div></div>
      <div id="animateableSection"><div id="footer"><Footer /></div></div>
    </>
  );
}

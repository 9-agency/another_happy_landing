
import V18 from "components/V18";
import Mantra from "components/Mantra";
import Footer from "components/Footer";
import ChessClock from "components/ChessClock";
import NineAgency from "components/NineAgency";
import Grid from "components/Grid";
import { useEffect } from "react";

const options: IntersectionObserverInit = {}

const translateIntersectionObserverCallback: IntersectionObserverCallback = (entries, _observer) => {
  entries.filter(entry => entry.isIntersecting).map(entry => {
    (entry as any).target.style.animation = "translateSectionAnimation .6s forwards ease-out";
  })
}

const translateIntersectionObserver = new IntersectionObserver(translateIntersectionObserverCallback, options)

const scaleIntersectionObserverCallback: IntersectionObserverCallback = (entries, _observer) => {
  entries.filter(entry => entry.isIntersecting).map(entry => {
    (entry as any).target.style.animation = "scaleSectionAnimation .2s forwards ease-out";
  })
}

const scaleIntersectionObserver = new IntersectionObserver(scaleIntersectionObserverCallback, { threshold: 0.2 })

const fadeInIntersectionObserverCallback: IntersectionObserverCallback = (entries, _observer) => {
  entries.filter(entry => entry.isIntersecting).map(entry => {
    (entry as any).target.style.animation = "fadeInSectionAnimation .5s .5s forwards ease-out";
  })
}

const fadeInIntersectionObserver = new IntersectionObserver(fadeInIntersectionObserverCallback, options)

export default () => {
  useEffect(() => {
    document.querySelectorAll("#translateSection").forEach(entry => {
      translateIntersectionObserver.observe(entry)
    })
    document.querySelectorAll("#scaleSection").forEach(entry => {
      scaleIntersectionObserver.observe(entry)
    })
    document.querySelectorAll("#fadeInSection").forEach(entry => {
      fadeInIntersectionObserver.observe(entry)
    })
    return () => {
    }
  }, [])
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

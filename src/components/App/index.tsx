
import AnimateAppearance from "components/AnimateAppearance";
import Landing from "components/Landing";
import { lazy, Suspense } from "react";

const V18 = lazy(() => import("components/V18"))
const HowWeWork = lazy(() => import("components/HowWeWork"))
const ChessClock = lazy(() => import("components/ChessClock"))
const Mantra = lazy(() => import("components/Mantra"))
const Footer = lazy(() => import("components/Footer"))

export default () => (
  <>
    <AnimateAppearance>
      <Landing />
    </AnimateAppearance>
    <Suspense fallback={<div />}>
      <div id="react"><V18 /></div>
      <div id="howwework"><HowWeWork /></div>
      <div id="pwa"><ChessClock /></div>
      <div id="mantra"><Mantra /></div>
      <div id="footer"><Footer /></div>
    </Suspense>
  </>
);

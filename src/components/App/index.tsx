
import Landing from "components/Landing";
import { lazy, Suspense } from "react";

const BelowLanding = lazy(() => import("components/BelowLanding"))

export default () => (
  <>
    <div id="home"><Landing /></div>
    <Suspense fallback={<div />}>
      <BelowLanding />
    </Suspense>
  </>
);

import React, { Suspense, useMemo, useRef, useState } from "react";
import Loading from "./Loading";
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const ThreeDee = () => {
  return (
    <>
   
        <Spline
          id="spline"
          className="spline"
          // onMouseHover={(e) => throttledEvt()}
          scene="https://draft.spline.design/sptreRHnjZVjBWnI/scene.spline"
        />
   
    </>
  );
};

export default ThreeDee;



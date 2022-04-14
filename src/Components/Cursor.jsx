import arrow from "../Assets/arrow.svg";
import { useRef, useEffect, useState, useCallback } from "react";

const Cursor = () => {
  const cursorRef = useRef();
  const throttle = (cb, delay = 12) => {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }
      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  };
  const handleMouseMove = (evt) => {
    cursorRef.current.style.display = "block";
    cursorRef.current.style.top = `${evt.clientY + 21}px`;
    cursorRef.current.style.left = `${evt.clientX + 23}px`;
  };
  const throttleMouseMove = throttle((e) => {
    handleMouseMove(e);
  });
  const handleMouseOut = (evt) => {
    cursorRef.current.style.display = "none";
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", throttleMouseMove, {
      passive: true,
    });
    document.body.addEventListener("mouseleave", handleMouseOut);

    return () => {
      document.body.removeEventListener("mousemove", throttleMouseMove, {
        passive: true,
      });
      document.body.removeEventListener("mouseleave", handleMouseOut);
    };
  }, []);

  return <img src={arrow} ref={cursorRef} alt="cursor" id="cursor" />;
};

export default Cursor;
// const memoizedCallback = useCallback((evt) => {
//  console.log('object');
//     cursorRef.current.style.display = "block";
//     cursorRef.current.style.top = `${evt.clientY + 21}px`;
//     cursorRef.current.style.left = `${evt.clientX + 23}px`;

//   // function handleMouseOut(evt) {
//   //   cursorRef.current.style.display = "none";
//   // }
// }, []);

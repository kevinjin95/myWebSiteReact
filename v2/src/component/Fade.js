import React from "react";
import { useState, useEffect, useRef } from "react";

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;
export function Fade({
  visible,
  children,
  duration = 500,
  animateEnter = false,
  from = { opacity: 0 }
}) {
  const childRef = useRef(children);
  const [state, setState] = useState(
    visible ? (animateEnter ? ENTERING : VISIBLE) : HIDDEN
  );
  if (visible) {
    childRef.current = children;
  }
  useEffect(() => {
    if (!visible) {
      setState(LEAVING);
    } else {
      setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
    }
  }, [visible]);

  useEffect(() => {
    if (state === LEAVING) {
      setTimeout(() => {
        setState(HIDDEN);
      }, duration);
    } else if (state === ENTERING) {
      document.body.offsetHeight;
      setState(VISIBLE);
    }
  }, [state]);

  if (state === HIDDEN) {
    return null;
  }
  let style = {
    transitionDuration: `${duration}ms`,
    transitionProperty: "opacity"
  };
  if (state !== VISIBLE) {
    if (from.opacity !== undefined) {
      style.opacity = from.opacity;
    }
  }
  return <div style={style}>{children}</div>;
}

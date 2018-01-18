import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";

import App from "./components/App";
import NotFound from "./components/common/NotFound";

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

const Routes = () => (
  <BrowserRouter>
    <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      className="switch-wrapper"
    >
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </AnimatedSwitch>
  </BrowserRouter>
);

export default Routes;

import { FunctionComponent, useContext, useEffect, useRef } from "react";
import { TweenMax } from "gsap";

import { DurationTimesEnum, NavigationContextTypes } from "../../types/types";
import { NavigationContext } from "../../../shared/context/navigation";

import "./Navigation-icon.css";

const NavigationIcon: FunctionComponent = () => {
  const {
    showNavigation,
    showNavigationHandler
  } = useContext<NavigationContextTypes>(NavigationContext);

  const navigationIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current: navigationIcon } = navigationIconRef;

    if (navigationIcon) {
      TweenMax.fromTo(
        navigationIcon,
        DurationTimesEnum.FAST_DURATION,
        { opacity: 0, x: -70 },
        { opacity: 1, x: 0, ease: "expo.out" }
      );
    }
  }, [navigationIconRef]);

  return (
    <div
      className={`navigation-icon ${
        showNavigation ? "position-fixed" : "position-absolute"
      } default-transition ${
        !showNavigation ? "top-left-0" : "left-temp"
      } z-140 hover`}
      onClick={() => showNavigationHandler(showNavigation ? false : true)}
    >
      <div ref={navigationIconRef}>
        <div
          className={`menu-line default-transition ${
            !showNavigation
              ? "yellow-background-color"
              : "default-background-color menu-line-close"
          }`}
        ></div>

        <div
          className={`menu-line default-transition ${
            !showNavigation
              ? "yellow-background-color"
              : "default-background-color menu-line-close"
          }`}
        ></div>

        <div
          className={`menu-line default-transition ${
            !showNavigation
              ? "yellow-background-color"
              : "default-background-color menu-line-close"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default NavigationIcon;

import { FunctionComponent, useEffect, useRef } from "react";
import { TweenMax } from "gsap";

import AboutMeAbstract from "../../components/About-me/About-me-abstract/About-me-abstract";
import CircleShape from "../../components/About-me/Circle-shape/Circle-shape";
import { useRendringPage } from "../../shared/hook/rendring-page/rendring-page";
import CurveLine from "../../shared/ui/Curve-line/Curve-line";
import NavigationIcon from "../../shared/ui/Navigation-icon/Navigation-Icon";
import Navigation from "../../shared/ui/Navigation/Navigation";
import { useCurveLine } from "../../shared/hook/curve-line/curve-line";
import { useCricle } from "../../shared/hook/circle/circle";
import { useResize } from "../../shared/hook/resize/resize";
import { DurationTimesEnum, ResizeHandlerActionsEnums } from "../../shared/types/types";

const AboutMe: FunctionComponent = () => {
  const aboutMeRef = useRef<HTMLElement>(null);
  const aboutMeAbstractRef = useRef<HTMLDivElement>(null);
  const { isAllowToRender } = useRendringPage(aboutMeRef);
  const { curve } = useCurveLine(isAllowToRender);
  const { showCurve } = useResize(ResizeHandlerActionsEnums.SHOW_CURVE);
  const { scale, rotate } = useCricle(isAllowToRender);

  useEffect(() => {
    const { current: aboutMeAbstract } = aboutMeAbstractRef;

    const htmlArr: (HTMLDivElement | null)[] = [];

    if (aboutMeAbstract && aboutMeAbstract.childNodes.length > 0) {
      aboutMeAbstract.childNodes.forEach(child => {
        htmlArr.push(child! as HTMLDivElement);
      });
    }

    if (isAllowToRender) {
      TweenMax.fromTo(
        htmlArr,
        DurationTimesEnum.SLOW_DURATION,

        {
          opacity: 0,
          y: 50,
          boxShadow: "0 0 0 0 rbg(0, 0, 0, 0)"
        },

        {
          opacity: 1,
          delay: 0.1,
          stagger: DurationTimesEnum.STAGGER,
          y: 0,
          ease: "expo.out"
        }
      );
    }
  }, [aboutMeAbstractRef, isAllowToRender]);

  return (
    <>
      <Navigation />

      <section
        ref={aboutMeRef}
        className="about-me white-background-color overflow-auto full-screen"
      >
        {isAllowToRender && (
          <div className="padding-3 w-100 h-100">
            <div className="max-width-1080 m-auto position-relative m-0 w-100 h-100">
              <NavigationIcon />
              <AboutMeAbstract aboutMeAbstractRef={aboutMeAbstractRef} />
              <CircleShape scale={scale} rotate={rotate} />

              {showCurve && (
                <CurveLine
                  large={true}
                  path={curve}
                  width="250px"
                  height="200px"
                  transition="slow-transition"
                  position="top-right-0"
                  opacity=""
                />
              )}

              {showCurve && (
                <CurveLine
                  small={true}
                  path={curve}
                  width="150px"
                  height="70px"
                  transition="default-transition"
                  position="bottom-left-10-5"
                  opacity="opacity-6"
                />
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AboutMe;

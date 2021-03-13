import { FunctionComponent, useCallback, useEffect, useReducer, useRef } from "react";
import { TweenMax } from "gsap";

import { useRendringPage } from "../../shared/hook/rendring-page/rendring-page";
import picTwo from "../../images/IMG_20181108_163317.jpg";
import picOne from "../../images/B612_20170920_0833344.jpg";
import picThree from "../../images/IMG_20190404_1029181.jpg";

import {
  BackgroundChangeHandlerTypes,
  HomeStateTypes,
  HomeDispatchEnums,
  HomeDispatchTypes,
  DurationTimesEnum
} from "../../shared/types/types";

import NavigationIcon from "../../shared/ui/Navigation-icon/Navigation-Icon";
import Buttons from "../../components/Home/buttons/Buttons";
import Backgrounds from "../../components/Home/Backgrounds/Backgrounds";
import Navigation from "../../shared/ui/Navigation/Navigation";
import InitialInformation from "../../components/Home/Initial-information/Inifial-information";
import { useRendringPage as useRedirectPage } from "../../shared/hook/redirect/redirect";

let timer: ReturnType<typeof setInterval>;

const reducer = (state: HomeStateTypes, action: HomeDispatchTypes): HomeStateTypes => {
  switch (action.type) {
    case HomeDispatchEnums.SCREEN_HEIGHT:
      return {
        ...state,
        screenHeight: action.screenHeight
      };

    case HomeDispatchEnums.TRANSLATE_Y:
      return {
        ...state,
        translateY: action.translateY
      };

    case HomeDispatchEnums.CAROUSEL_POSITION:
      return {
        ...state,
        carouselPosition: action.carouselPosition
      };

    case HomeDispatchEnums.PICTURES:
      return {
        ...state,
        pictures: [
          ...state.pictures.map(pic => {
            if (pic.id === action.id) {
              pic.yellowButton = true;
            } else {
              pic.yellowButton = false;
            }

            return pic;
          })
        ]
      };

    default:
      return state;
  }
};

const Home: FunctionComponent = () => {
  const [{ screenHeight, translateY, carouselPosition, pictures }, dispatch] = useReducer(reducer, {
    screenHeight: 0,
    translateY: 0,
    carouselPosition: 0,

    pictures: [
      { id: Math.random().toString(), picture: picOne, yellowButton: true },
      { id: Math.random().toString(), picture: picTwo, yellowButton: false },
      { id: Math.random().toString(), picture: picThree, yellowButton: false }
    ]
  });

  const homeRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const myNameRef = useRef<HTMLDivElement>(null);
  const myJobRef = useRef<HTMLDivElement>(null);
  const myLevelRef = useRef<HTMLDivElement>(null);
  const myPortfolioRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const { isAllowToRender } = useRendringPage(homeRef);
  const { navigateToPage } = useRedirectPage();

  // get window screen innerHeight

  useEffect(() => {
    dispatch({ type: HomeDispatchEnums.SCREEN_HEIGHT, screenHeight: window.innerHeight });

    const getScreenInnerHeight = (event: any) => {
      const innerHeight = (event.target as { innerHeight: number }).innerHeight;

      dispatch({ type: HomeDispatchEnums.SCREEN_HEIGHT, screenHeight: innerHeight });
      dispatch({ type: HomeDispatchEnums.TRANSLATE_Y, translateY: innerHeight * carouselPosition });
    };

    window.addEventListener("resize", getScreenInnerHeight);

    return () => {
      window.removeEventListener("resize", getScreenInnerHeight);
    };
  }, [carouselPosition]);

  // change carousel position

  const backgroundChangerHandler = useCallback(
    ({ id, index }: BackgroundChangeHandlerTypes) => {
      dispatch({ type: HomeDispatchEnums.TRANSLATE_Y, translateY: screenHeight * index });
      dispatch({ type: HomeDispatchEnums.CAROUSEL_POSITION, carouselPosition: index });
      dispatch({ type: HomeDispatchEnums.PICTURES, id });
    },
    [screenHeight]
  );

  // change carousel position by timer

  useEffect(() => {
    if (!isAllowToRender) {
      return;
    }

    const backgroundChangerHandlerByTimer = (delay: number) => {
      timer = setTimeout(() => {
        const picturesState = [...pictures];
        const findedIndexOfPicture = picturesState.find(pic => pic.yellowButton);

        if (!findedIndexOfPicture) {
          return;
        }

        const changeButtonHandler = (index: number) => {
          findedIndexOfPicture.yellowButton = false;
          picturesState[index].yellowButton = true;
        };

        const args: BackgroundChangeHandlerTypes = { id: "", index: 0 };

        args["index"] = picturesState.indexOf(findedIndexOfPicture) + 1;

        if (!picturesState[args["index"]]) {
          args["index"] = 0;
          changeButtonHandler(args["index"]);
        }

        args["id"] = picturesState[args["index"]].id;

        backgroundChangerHandler(args);

        timer = setTimeout(() => {
          args["index"] = args["index"]++;
          changeButtonHandler(args["index"]);

          backgroundChangerHandlerByTimer(delay);
        }, delay);
      }, delay);
    };

    backgroundChangerHandlerByTimer(3000);

    return () => {
      clearTimeout(timer);
    };
  }, [backgroundChangerHandler, pictures, isAllowToRender]);

  // animation

  useEffect(() => {
    const { current: myName } = myNameRef;
    const { current: myJob } = myJobRef;
    const { current: myLevel } = myLevelRef;
    const { current: myPortfolio } = myPortfolioRef;
    const { current: button } = buttonRef;

    const htmlArr: (HTMLDivElement | null)[] = [myName, myJob, myLevel, myPortfolio];

    if (button) {
      button.childNodes.forEach(child => {
        if (child.firstChild) {
          htmlArr.push(child.firstChild! as HTMLDivElement);
        }
      });
    }

    if (htmlArr.length > 0 && htmlArr.every(html => html) && isAllowToRender) {
      TweenMax.fromTo(
        htmlArr,
        DurationTimesEnum.SLOW_DURATION,
        { y: 200 },
        { y: 0, stagger: DurationTimesEnum.STAGGER, ease: "expo.out" }
      );
    }
  }, [myNameRef, myJobRef, myLevelRef, myPortfolioRef, isAllowToRender, buttonRef]);

  return (
    <>
      <Navigation />

      <section ref={homeRef} className="home full-screen">
        <div className="container-fluid p-0 w-100 h-100 position-relative">
          <Backgrounds pictures={pictures} translateY={-translateY} carouselRef={carouselRef} />

          {isAllowToRender && (
            <div className="padding-3 w-100 h-100">
              <div className="max-width-1080 m-auto position-relative w-100 h-100 m-0">
                <NavigationIcon />

                <InitialInformation
                  myNameRef={myNameRef}
                  myJobRef={myJobRef}
                  myLevelRef={myLevelRef}
                  myPortfolioRef={myPortfolioRef}
                  navigateToPage={navigateToPage}
                />

                <Buttons
                  buttonRef={buttonRef}
                  pictures={pictures}
                  onClickHandler={backgroundChangerHandler}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;

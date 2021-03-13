import { FunctionComponent, useEffect, useRef } from "react";
import { TweenMax } from "gsap";

import { useRendringPage } from "../../shared/hook/rendring-page/rendring-page";
import NavigationIcon from "../../shared/ui/Navigation-icon/Navigation-Icon";
import Navigation from "../../shared/ui/Navigation/Navigation";
import SkillsItem from "../../components/Skills/Skills-Item/Skills-Item";
import { DurationTimesEnum, ResizeHandlerActionsEnums } from "../../shared/types/types";
import { useResize } from "../../shared/hook/resize/resize";

import "./Skills.css";

const Skills: FunctionComponent = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const skillsItemRef = useRef<HTMLDivElement>(null);
  const { isAllowToRender } = useRendringPage(skillsRef);
  const { mySkills, skillItemPerCol } = useResize(ResizeHandlerActionsEnums.SKILL_ITEM_PER_COL);

  useEffect(() => {
    const { current: skillsItem } = skillsItemRef;

    if (skillsItem) {
      const htmlArr: HTMLDivElement[] = [];

      skillsItem.childNodes.forEach(child => htmlArr.push(child! as HTMLDivElement));

      TweenMax.fromTo(
        htmlArr,
        DurationTimesEnum.FAST_DURATION,
        { opacity: 0, y: 50 },
        { opacity: 1, delay: 0.1, y: 0, stagger: DurationTimesEnum.STAGGER, ease: "expo.out" }
      );
    }
  }, [isAllowToRender, skillsItemRef]);

  return (
    <>
      <Navigation />

      <section ref={skillsRef} className="skills gray-background-color overflow-auto full-screen">
        {isAllowToRender && (
          <div className="padding-3">
            <div className="max-width-1080 m-auto position-relative w-100 h-100 m-0">
              <NavigationIcon />

              <div className="container-fluid py-5 p-0 w-100 h-100 position-relative">
                <SkillsItem
                  skillsItemRef={skillsItemRef}
                  skills={mySkills}
                  skillItemPerCol={skillItemPerCol}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Skills;

import { FunctionComponent } from "react";

import SkillBar from "../../../shared/ui/Skill-bar/Skill-bar";
import { SkillsItemArrTypes } from "../../../shared/types/types";
import { lists } from "../../../shared/utils/make-list/make-list";

import "./Skills-item.css";

const SkillsItem: FunctionComponent<SkillsItemArrTypes> = ({
  skills,
  skillItemPerCol,
  skillsItemRef
}): any => {
  return (
    <div className="w-100 h-100">
      <div ref={skillsItemRef} className="skills-item row p-0 m-0">
        <div className="mb-5 text-center">
          <h3 className="yellow-color">SKILLS</h3>
        </div>

        {lists(skills, skillItemPerCol).map(skill => (
          <div key={Math.random()} className="skill-item col p-0">
            {skill.map(({ label, percent }) => (
              <SkillBar key={label} percent={percent} label={label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsItem;

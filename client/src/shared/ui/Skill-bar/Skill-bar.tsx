import { FunctionComponent } from "react";

import { SkillItemTypes } from "../../types/types";

import "./Skill-bar.css";

const SkillBar: FunctionComponent<SkillItemTypes> = ({ percent, label }) => {
  return (
    <div className="row m-0 p-0 d-flex align-items-center mb-3">
      <div className="col-4 p-0">
        <p className="m-0">{label}</p>
      </div>

      <div className="col-8 p-0">
        <div className="w-100 white-background-color h-10 border-radius-30">
          <div
            className="h-100 dark-gray-background-color border-radius-30 default-transition"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;

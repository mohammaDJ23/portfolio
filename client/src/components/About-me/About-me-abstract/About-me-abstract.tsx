import { FunctionComponent, memo } from "react";

import pic from "../../../images/IMG_20160922_140249.jpg";
import { AboutMeAbstractComponentTypes } from "../../../shared/types/types";

import "./About-me-abstract.css";

const AboutMeAbstract: FunctionComponent<AboutMeAbstractComponentTypes> = ({
  aboutMeAbstractRef
}) => {
  return (
    <div className="information container-fluid position-absolute top-left-50 z-120">
      <div ref={aboutMeAbstractRef} className="row p-0 d-flex align-items-center">
        <div className="picture col-4 p-0">
          <div className="w-100 h-500">
            <img className="w-100 h-100 cover" src={pic} alt="admin" />
          </div>
        </div>

        <div className="col-8 p-0">
          <div className="padding-left-3-temp">
            <div className="mb-4">
              <h3 className="yellow-color">ABOUT ME</h3>
            </div>

            <div>
              <p className="abstract">
                Front-end developer with great attention to UI/UX design. <br />
                Specialize in building cross-browser compatible web user interfaces using styleguide
                development approach and components standardization. <br />I am passionate with
                elegant user interfaces, resolving usability issues and prototype user testing.
                <br />
                Excited with designing and developing the product, considering tons of UX
                peculiarities and using innovative technologies. <br />
                Enjoy working side by side with professionals, share experience and putting into
                practice the latest technology and trends - thus we evolve much effectively, I
                believe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutMeAbstract);

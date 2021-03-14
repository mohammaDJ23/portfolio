import { FunctionComponent, memo } from "react";

import { HomeBackgroundsComponentTypes } from "../../../shared/types/types";

const Backgrounds: FunctionComponent<HomeBackgroundsComponentTypes> = ({
  pictures,
  translateY,
  carouselRef
}) => {
  return (
    <div className="row p-0 m-0 overflow-hidden z-100 h-100 position-absolute default-transition top-left-0 full-screen">
      <div
        className="p-0 position-absolute w-100 h-100 top-left-0 default-transition"
        ref={carouselRef}
        style={{ transform: `translateY(${translateY}px)` }}
      >
        {pictures.map(pic => (
          <div
            key={pic.id}
            className="w-100 h-100 default-transition"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${pic.picture})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: pic.yellowButton ? 1 : 0.4,
              transform: `scale(${pic.yellowButton ? 1 : 0.95})`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default memo(Backgrounds);

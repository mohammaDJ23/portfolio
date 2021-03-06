import { FunctionComponent, memo, useContext } from "react";
import { createPortal } from "react-dom";

import { NavigationContextTypes, NavigationListTypes } from "../../types/types";
import { NavigationContext } from "../../context/navigation";
import { useRendringPage } from "../../hook/redirect/redirect";

import "./Navigation.css";

const navigationList: NavigationListTypes[] = [
  { name: "HOME", path: "/home" },
  { name: "ABOUT ME", path: "/about-me" },
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "SKILLS", path: "/skills" },
  { name: "CONTACT", path: "/contact" }
];

const Navigation: FunctionComponent = () => {
  const { navigateToPage } = useRendringPage();

  const {
    showNavigation,
    showNavigationHandler
  } = useContext<NavigationContextTypes>(NavigationContext);

  const onClickHandler = (path: string) => {
    showNavigationHandler(false);
    navigateToPage(path);
  };

  const nav = (
    <>
      {showNavigation && (
        <div
          className="closer position-fixed w-100 h-100"
          onClick={() => showNavigationHandler(false)}
        ></div>
      )}

      <nav
        className={`position-fixed z-130 navigation h-100 yellow-background-color default-transition ${
          !showNavigation ? "hide" : "show"
        }`}
      >
        <div className="container-fluid">
          <div className="row p-0">
            <div className="col p-0">
              <ul className="navigation-list">
                {navigationList.map(({ name, path }) => (
                  <li
                    key={name}
                    className="fast-transition hover"
                    onClick={() => onClickHandler(path)}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );

  return createPortal(
    nav,
    document.getElementById("navigation")! as HTMLDivElement
  );
};

export default memo(Navigation);

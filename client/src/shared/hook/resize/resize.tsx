import { useCallback, useEffect, useReducer } from "react";

import {
  resizeDispatchTypes,
  ResizeHandlerActionsEnums,
  UseResizeHookTypes,
  SkillItemTypes,
  UseResizeHookReturnTypes
} from "../../types/types";

const mySkills: SkillItemTypes[] = [
  { label: "Html", percent: 100 },
  { label: "Css", percent: 100 },
  { label: "Javascript", percent: 90 },
  { label: "Typescript", percent: 80 },
  { label: "Bootstrap", percent: 95 },
  { label: "React.js", percent: 98 },
  { label: "Next.js", percent: 85 },
  { label: "Node.js", percent: 90 },
  { label: "Express.js", percent: 94 },
  { label: "MongoDb", percent: 87 },
  { label: "Mongoose", percent: 80 },
  { label: "MERN stack", percent: 98 },
  { label: "REST api", percent: 100 },
  { label: "GraphQl", percent: 92 },
  { label: "Socket.io", percent: 70 },
  { label: "Photoshop", percent: 40 },
  { label: "Front end", percent: 90 },
  { label: "Back end", percent: 80 }
];

const reducer = (
  state: UseResizeHookTypes,
  action: resizeDispatchTypes
): UseResizeHookTypes | never => {
  switch (action.type) {
    case ResizeHandlerActionsEnums.SHOW_CURVE:
      return {
        ...state,
        showCurve: action.showCurve
      };

    case ResizeHandlerActionsEnums.PORTfOLIO_ITEM_PER_ROW:
      return {
        ...state,
        portfolioItemPerRow: action.portfolioItemPerRow
      };

    case ResizeHandlerActionsEnums.SKILL_ITEM_PER_COL:
      return {
        ...state,
        skillItemPerCol: action.skillItemPerCol
      };

    default: {
      throw new Error("Invalid case.");
    }
  }
};

export const useResize = (type: number): UseResizeHookReturnTypes => {
  const [{ showCurve, portfolioItemPerRow, skillItemPerCol }, dispatch] = useReducer(reducer, {
    showCurve: true,
    portfolioItemPerRow: 3,
    skillItemPerCol: 0
  });

  const showCurveDispatch = useCallback((show: boolean) => {
    dispatch({ type: ResizeHandlerActionsEnums.SHOW_CURVE, showCurve: show });
  }, []);

  const portfolioItemPerRowDispatch = useCallback((num: number) => {
    dispatch({ type: ResizeHandlerActionsEnums.PORTfOLIO_ITEM_PER_ROW, portfolioItemPerRow: num });
  }, []);

  const skillItemPerColDispatch = useCallback((num: number) => {
    dispatch({
      type: ResizeHandlerActionsEnums.SKILL_ITEM_PER_COL,
      skillItemPerCol: num
    });
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      switch (type) {
        case ResizeHandlerActionsEnums.SHOW_CURVE:
          if (window.innerWidth <= 960) {
            showCurveDispatch(false);
            break;
          }

          showCurveDispatch(true);
          break;

        case ResizeHandlerActionsEnums.PORTfOLIO_ITEM_PER_ROW:
          if (window.innerWidth <= 680) {
            portfolioItemPerRowDispatch(1);
            break;
          }

          if (window.innerWidth <= 1080) {
            portfolioItemPerRowDispatch(2);
            break;
          }

          portfolioItemPerRowDispatch(3);
          break;

        case ResizeHandlerActionsEnums.SKILL_ITEM_PER_COL:
          if (window.innerWidth <= 740) {
            skillItemPerColDispatch(mySkills.length);
            break;
          }

          if (window.innerWidth <= 1280) {
            skillItemPerColDispatch(Math.round(mySkills.length / 2));
            break;
          }

          skillItemPerColDispatch(Math.round(mySkills.length / 3));
          break;

        default: {
          throw new Error("Invalid case.");
        }
      }
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [type, showCurveDispatch, portfolioItemPerRowDispatch, skillItemPerColDispatch]);

  return { showCurve, portfolioItemPerRow, skillItemPerCol, mySkills };
};

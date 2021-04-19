import { FunctionComponent, useEffect, useRef } from "react";
import { TweenMax } from "gsap";

import { useRendringPage } from "../../shared/hook/rendring-page/rendring-page";
import NavigationIcon from "../../shared/ui/Navigation-icon/Navigation-Icon";
import Navigation from "../../shared/ui/Navigation/Navigation";
import PortfolioItem from "../../components/Portfolio/Portfolio-item/Portfolio-item";
import instagram from "../../images/instagram.png";
import kallyas from "../../images/kallyas.jpg";
import shop from "../../images/shop.jpg";
import maxon from "../../images/maxon.jpg";
import map from "../../images/map.jpg";
import jsNotes from "../../images/js-notes.png";
import { useResize } from "../../shared/hook/resize/resize";

import {
  DurationTimesEnum,
  MyWorksTypes,
  ResizeHandlerActionsEnums
} from "../../shared/types/types";

const myWorks: MyWorksTypes[] = [
  {
    name: "JS NOTES",
    image: jsNotes,
    url: "https://github.com/mohammaDJ23/js-notes/tree/main/Desktop/js-notes"
  },
  { name: "INSTAGRAM", image: instagram, url: "https://instagram-75476.web.app/auth" },
  { name: "KALLYAS", image: kallyas, url: "https://kallyas-5caae.web.app/home" },
  { name: "SHOP", image: shop, url: "https://shop-24c15.web.app/home" },
  { name: "MAXON", image: maxon, url: "https://github.com/mohammaDJ23/maxon" },
  { name: "MAP", image: map, url: "https://map-2e6d1.web.app/" }
];

const Portfolio: FunctionComponent = () => {
  const portfolioRef = useRef<HTMLElement>(null);
  const portfolioItemHeadRef = useRef<HTMLDivElement>(null);
  const portfolioItemRef = useRef<HTMLDivElement>(null);
  const { isAllowToRender } = useRendringPage(portfolioRef);
  const { portfolioItemPerRow } = useResize(ResizeHandlerActionsEnums.PORTfOLIO_ITEM_PER_ROW);

  useEffect(() => {
    const { current: portfolioItemHead } = portfolioItemHeadRef;
    const { current: portfolioItem } = portfolioItemRef;

    if (isAllowToRender && portfolioItem && portfolioItemHead) {
      const rowCols: {
        row: HTMLDivElement[];
        col: HTMLDivElement[];
      } = {
        row: [],
        col: []
      };

      portfolioItem.childNodes.forEach(row => rowCols["row"].push(row! as HTMLDivElement));

      rowCols.row.forEach(row =>
        row.childNodes.forEach(col => rowCols["col"].push(col! as HTMLDivElement))
      );

      TweenMax.fromTo(
        [portfolioItemHead, ...rowCols["col"]],
        DurationTimesEnum.FAST_DURATION,
        { opacity: 0, y: 50 },
        { opacity: 1, delay: 0.1, y: 0, stagger: DurationTimesEnum.STAGGER, ease: "expo.out" }
      );
    }
  }, [isAllowToRender, portfolioItemRef, portfolioItemHeadRef]);

  return (
    <>
      <Navigation />

      <section ref={portfolioRef} className="portfolio white-background-color full-screen">
        {isAllowToRender && (
          <div className="padding-3">
            <div className="max-width-1080 position-relative m-auto m-0 w-100 h-100">
              <NavigationIcon />

              <PortfolioItem
                portfolioItemHeadRef={portfolioItemHeadRef}
                portfolioItemRef={portfolioItemRef}
                portfolio={myWorks}
                itemPerRow={portfolioItemPerRow}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Portfolio;

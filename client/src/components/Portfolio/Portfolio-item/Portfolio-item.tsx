import { FunctionComponent } from "react";

import { PortfolioItemComponentTypes } from "../../../shared/types/types";
import { lists } from "../../../shared/utils/make-list/make-list";

import "./Portfolio-item.css";

const PortfolioItem: FunctionComponent<PortfolioItemComponentTypes> = ({
  itemPerRow,
  portfolio,
  portfolioItemHeadRef,
  portfolioItemRef
}) => {
  return (
    <div className="container-fluid pt-5 w-100 h-100 p-0 text-center">
      <div ref={portfolioItemHeadRef} className="mb-5">
        <h3 className="yellow-color">MY PORTFOLIO</h3>
      </div>

      <div ref={portfolioItemRef}>
        {lists(portfolio, itemPerRow).map(item => (
          <div key={Math.random()} className="row p-0 mx-0 portfolio-row">
            {item.map(({ name, image, url }) => (
              <div key={Math.random()} className="col p-0 portfolio-col">
                <a
                  href={url}
                  onClick={e => {
                    e.preventDefault();
                    window.open(url);
                  }}
                  className="hover"
                >
                  <div key={name} className="portfolio-item position-relative">
                    <div className="h-100 w-100">
                      <img className="cover w-100 h-100" src={image} alt={url} />
                    </div>

                    <div className="portfolio-item-cover w-100 h-100 fast-transition position-absolute top-left-0">
                      <div className="portfolio-item-name position-absolute top-left-50">
                        <h5 className="white-color">{name}</h5>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioItem;

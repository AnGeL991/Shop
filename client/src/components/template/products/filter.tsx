import { FC } from "react";
import { EachCategory, Button, Tag, EachFilter } from "components/common";
import { useFilterValue } from "_hooks";
import { ApplicationState } from "store/index";
import { useSelector } from "react-redux";
import "./style/filter.scss";

const data = [
  { name: "sofa", path: "/shop/sofa" },
  {
    name: "bed",
    path: "/shop/bed",
    subLink: [
      { name: "Single", path: "/shop/bed/single" },
      { name: "Double", path: "/shop/bed/double" },
    ],
  },
  {
    name: "table",
    path: "/shop/table",
    subLink: [{ name: "Long table", path: "/shop/table/long" }],
  },
  { name: "accessories", path: "/shop/accesories" },
  { name: "chair", path: "/shop" },
];

const dataTag = [{ name: "Summer" }, { name: "Winter" }];

export const Filter: FC = () => {
  const { minPrice, maxPrice, price } = useSelector(
    (store: ApplicationState) => store.inventory
  );

  const { handleSetFilterPrice } = useFilterValue();

  const categoryData = data.map((el) => (
    <EachCategory key={el.name} name={el.name} className="filterContext" />
  ));
  const tagData = dataTag.map((el) => <Tag key={el.name} name={el.name} />);

  return (
    <section className="container">
      <EachFilter title="Product categories">
        <ul className="filterContext">{categoryData}</ul>
      </EachFilter>
      <EachFilter title="Filter by price">
        <div className="filterContext">
          <input
            className="filterContext__range"
            type="range"
            min={minPrice}
            max={maxPrice}
            onChange={handleSetFilterPrice}
          />
          <Button className="filterContext__button">Filter</Button>
          <p className="filterContext__price">
            Price: <span>${minPrice > price ? minPrice : price}</span> —{" "}
            <span>${maxPrice}</span>
          </p>
        </div>
      </EachFilter>
      <EachFilter title="Product tags">{tagData}</EachFilter>
    </section>
  );
};

import React from "react";
import { Category } from "../category";
import { categories } from "./category.data";

const Categories = () => {
  return (
    <div className="container">
      <div className="row">
        {categories.map(({ id, ...rest }) => (
          <div key={id.toString()} className="col-sm-3">
            <Category {...rest} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

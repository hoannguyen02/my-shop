import React from "react";
import { CategoryItem } from "../../model";
import CategoryComponent from "../category/category.component";
import { categories } from "./categories.data";

const CategoriesComponent = () => {
  return (
    <div className="container">
      <div className="row">
        {categories.map((category: CategoryItem) => (
          <div key={category.id.toString()} className="col-lg-4 col-xl-3">
            <CategoryComponent {...category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesComponent;

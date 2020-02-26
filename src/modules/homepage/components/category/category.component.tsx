import React from "react";
import { Link } from "react-router-dom";
import { CategoryItem } from "../../model";
import "./category.style.scss";

const CategoryComponent = ({ title, imageUrl, linkUrl }: CategoryItem) => {
  return (
    <Link to={linkUrl}>
      <img className="category-image" src={imageUrl} alt={title} />
      <h3 className="text-center">{title.toUpperCase()}</h3>
    </Link>
  );
};

export default CategoryComponent;

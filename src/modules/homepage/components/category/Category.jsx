import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

const Category = ({ title, imageUrl, linkUrl }) => {
  return (
    <Link to={linkUrl}>
      <img className="category-image" src={imageUrl} alt={title} />
      <h3>{title.toUpperCase()}</h3>
    </Link>
  );
};

export default Category;

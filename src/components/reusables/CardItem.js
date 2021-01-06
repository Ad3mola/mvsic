import React from "react";
import { Link } from "react-router-dom";

function CardItem({ classnames }) {
  return (
    <Link to="/" className={"d-block " + classnames}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1510759704643-849552bf3b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="category-img"
          className="w-100"
        />
      </div>
      <div className="text">
        <h6 className=" mb-0" style={{ fontWeight: "600" }}>
          category name
        </h6>
        <small className="text-muted">holidays</small>
      </div>
    </Link>
  );
}

export default CardItem;

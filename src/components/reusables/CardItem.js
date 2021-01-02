import React from "react";
import { Link } from "react-router-dom";

function CardItem({ classname }) {
  return (
    <Link to="/" className={"d-block " + classname}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1601758260820-6342add57279?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="category-img"
          className="w-100"
        />
      </div>
      <h6 className="font-weight-bold mb-0">category name</h6>
      <small className="text-muted">holidays</small>
    </Link>
  );
}

export default CardItem;

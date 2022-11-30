import React from "react";

// styles
import "./Card.scss";

const Card = (props) => {
  const { name, url, text, description } = props.element;

  return (
    <div className="card mx-3 ">
      <div className="card-body">
        <h5 className="card-title">{text}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">
          Go to {name}
        </a>
      </div>
    </div>
  );
};

export default Card;

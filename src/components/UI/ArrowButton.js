import React from "react";

const ArrowButton = (props) => {
  return (
    <button
      type="submit"
      name={props.name}
      className="arrow-btn"
      onClick={props.onClick}
    >
      {props.name === "up" && (
        <picture>
          <source
            srcSet={process.env.PUBLIC_URL + "/images/arrow_up_32.png"}
            media="(max-width: 390px)"
          />
          <img
            className="arrow-img"
            src={process.env.PUBLIC_URL + "/images/arrow_up_48.png"}
            alt="arrow up"
          />
        </picture>
      )}
      {props.name === "down" && (
        <picture>
          <source
            srcSet={process.env.PUBLIC_URL + "/images/arrow_down_32.png"}
            media="(max-width: 390px)"
          />
          <img
            className="arrow-img"
            src={process.env.PUBLIC_URL + "/images/arrow_down_48.png"}
            alt="arrow down"
          />
        </picture>
      )}
      {props.name === "left" && (
        <picture>
          <source
            srcSet={process.env.PUBLIC_URL + "/images/arrow_left_32.png"}
            media="(max-width: 390px)"
          />
          <img
            className="arrow-img"
            src={process.env.PUBLIC_URL + "/images/arrow_left_48.png"}
            alt="arrow left"
          />
        </picture>
      )}
      {props.name === "right" && (
        <picture>
          <source
            srcSet={process.env.PUBLIC_URL + "/images/arrow_right_32.png"}
            media="(max-width: 390px)"
          />
          <img
            className="arrow-img"
            src={process.env.PUBLIC_URL + "/images/arrow_right_48.png"}
            alt="arrow right"
          />
        </picture>
      )}
    </button>
  );
};

export default ArrowButton;

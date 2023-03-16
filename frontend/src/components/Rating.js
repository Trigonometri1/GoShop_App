import React from "react";
import PropTypes from "prop-types";

const Rating = ({ rating_value, review_text, color }) => {
  return (
    <>
      <span>
        <i
          style={{ color: color }}
          className={
            rating_value >= 1
              ? "fa-sharp fa-solid fa-star"
              : rating_value >= 0.5
              ? "fa-sharp fa-regular fa-star-half-stroke"
              : "fa-sharp fa-regular fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style={{ color: color }}
          className={
            rating_value >= 2
              ? "fa-sharp fa-solid fa-star"
              : rating_value >= 1.5
              ? "fa-sharp fa-regular fa-star-half-stroke"
              : "fa-sharp fa-regular fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style={{ color: color }}
          className={
            rating_value >= 3
              ? "fa-sharp fa-solid fa-star"
              : rating_value >= 2.5
              ? "fa-sharp fa-regular fa-star-half-stroke"
              : "fa-sharp fa-regular fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style={{ color: color }}
          className={
            rating_value >= 4
              ? "fa-sharp fa-solid fa-star"
              : rating_value >= 3.5
              ? "fa-sharp fa-regular fa-star-half-stroke"
              : "fa-sharp fa-regular fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style={{ color }}
          className={
            rating_value >= 5
              ? "fa-sharp fa-solid fa-star"
              : rating_value >= 4.5
              ? "fa-sharp fa-regular fa-star-half-stroke"
              : "fa-sharp fa-regular fa-star"
          }
        ></i>
      </span>

      <span> {review_text && review_text}</span>
      {/* <span>
        <i class="fa-sharp fa-solid fa-star"></i>
      </span>
      <span>
        <i class="fa-sharp fa-regular fa-star"></i>
      </span>
      <span>
        <i class="fa-sharp fa-regular fa-star-half-stroke"></i>
      </span> */}
    </>
  );
};

Rating.defaultProps = {
  color: "#D6D932",
};

Rating.propTypes = {
  rating_value: PropTypes.number.isRequired,
  review_text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;

import { useState } from "react";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const startContainerStyle = {
  display: "flex",
};
StarRating.propTypes = {
  maxRating: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  messages: PropTypes.array,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};

export default function StarRating({
  maxRating = 5,
  size = 48,
  color = "#fcc419",
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating = () => {},
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    fontsize: `${size / 1.5}px`,
    color,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={startContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={(rating >= i + 1 && tempRating === 0) || tempRating >= i + 1}
            half={rating === i + 0.5}
            color={color}
            size={size}
          />
        ))}
      </div>
      {/* <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p> */}
    </div>
  );
}

function Star({ onRate, full, onHoverIn, color, size, half }) {
  const starStyle = {
    width: `${half ? size + 2 : size}px`,
    height: `${half ? size + 2 : size}px`,
    marginTop: `${half ? -2 : 0}px`,
    display: "block",
    // cursor: "pointer",
  };
  return (
    <span
      // role="button"
      style={starStyle}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          stroke={color}
          viewBox="0 0 24 24"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" stroke={color}></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          </g>
        </svg>
      ) : half ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          stroke={color}
          viewBox="0 0 24 24"
          strokeWidth="0"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" stroke={color}></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M22 9.74l-7.19-.62L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.63-7.03L22 9.74zM12 15.9V6.6l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.9z"></path>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke={color}
          fill="transparent"
          viewBox="0 0 24 24"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" stroke={color}></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          </g>
        </svg>
      )}
    </span>
  );
}

/*
FULL STAR



EMPTY STAR



*/
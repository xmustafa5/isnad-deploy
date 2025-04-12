export const Iconlyheartlike = ({
  size = 24,
  color = "#FFFFFF", // Default stroke color
  secondColor = "#FFFFFF", // Not used in this example
  fillColor = "#df1111", // Default fill color (red)
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6449 11.914C21.6665 8.72843 20.4794 5.07291 17.1421 3.99775C16.2781 3.7224 15.3615 3.65818 14.4683 3.80899C13.5751 3.96078 12.7296 4.57765 12.0037 5.12253C11.2749 4.58252 10.4304 3.96856 9.53816 3.81775C8.64592 3.66596 7.73034 3.72823 6.86632 3.99775C3.52896 5.08264 2.33218 8.72843 3.35383 11.914C4.93007 16.9668 12.0037 20.2701 12.0037 20.2701C12.0037 20.2701 18.9713 17.0251 20.6449 11.914Z"
        stroke={color} // Stroke color (outline)
        fill={fillColor} // Fill color (main color)
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const IconlyArrowleftSM = ({
  size = 28,
  color = "#FFFFFF",
  secondColor = "#FFFFFF",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pb-[2px]"
    >
      <path
        d="M17 12L7 12M7 12L11 16M7 12L11 8"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

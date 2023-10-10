import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  showArrow = false,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`rounded-md font-bold bg-[#82DB39] text-white w-full md:w-[220px] flex items-center gap-2 px-6 py-4 justify-center`}
    >
      {children}
      {showArrow && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7031 7.69305L4.68325 13.7126C4.30032 14.0958 3.67965 14.0958 3.2969 13.7126C2.91413 13.3299 2.91413 12.709 3.2969 12.3263L8.62339 6.99997L3.2969 1.67368C2.91413 1.29072 2.91413 0.669957 3.2969 0.287213C3.67968 -0.0957176 4.3005 -0.0957176 4.68343 0.287213L10.7033 6.30689C10.8946 6.49837 10.9902 6.74907 10.9902 6.99997C10.9902 7.25079 10.8944 7.50166 10.7031 7.69305Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;

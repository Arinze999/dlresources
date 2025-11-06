/* eslint-disable @typescript-eslint/no-explicit-any */

import { ArrowRight } from "./icons/ArrowRight";

const Button = ({
  className,
  text,
  icon,
  onClick,
  disabled,
}: {
  className?: string;
  text?: string;
  icon?: boolean;
  onClick?: any;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`${className} cursor-pointer  rounded-xl py-2.5 px-5 flex justify-center items-center gap-2`}
      onClick={onClick}
      disabled={disabled}
      style={disabled ? { cursor: 'not-allowed' } : {}}
    >
      {text}
      {icon && (
       <ArrowRight/>
      )}
    </button>
  );
};

export default Button;

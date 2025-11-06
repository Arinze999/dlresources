import { SVGProps } from 'react';

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.293 8L4.146 4.854l.708-.708L8.707 8l-3.853 3.854l-.708-.707zm3 0L7.146 4.854l.708-.708L11.707 8l-3.853 3.854l-.708-.707z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

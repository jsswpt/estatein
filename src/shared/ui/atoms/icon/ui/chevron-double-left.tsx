import { type IconProps } from "./index.type";

export const ChevronDoubleLeft = ({ variant = "outline" }: IconProps) => {
  switch (variant) {
    case "outline":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 19.5L11.25 12L18.75 4.5M12.75 19.5L5.25 12L12.75 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "solid":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2803 3.96967C13.5732 4.26256 13.5732 4.73744 13.2803 5.03033L6.31066 12L13.2803 18.9697C13.5732 19.2626 13.5732 19.7374 13.2803 20.0303C12.9874 20.3232 12.5126 20.3232 12.2197 20.0303L4.71967 12.5303C4.42678 12.2374 4.42678 11.7626 4.71967 11.4697L12.2197 3.96967C12.5126 3.67678 12.9874 3.67678 13.2803 3.96967ZM19.2803 3.96967C19.5732 4.26256 19.5732 4.73744 19.2803 5.03033L12.3107 12L19.2803 18.9697C19.5732 19.2626 19.5732 19.7374 19.2803 20.0303C18.9874 20.3232 18.5126 20.3232 18.2197 20.0303L10.7197 12.5303C10.4268 12.2374 10.4268 11.7626 10.7197 11.4697L18.2197 3.96967C18.5126 3.67678 18.9874 3.67678 19.2803 3.96967Z"
            fill="currentColor"
          />
        </svg>
      );

    default:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 19.5L11.25 12L18.75 4.5M12.75 19.5L5.25 12L12.75 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

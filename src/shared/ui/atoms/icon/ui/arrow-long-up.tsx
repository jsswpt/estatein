import { type IconProps } from "./index.type";

export const ArrowLongUp = ({ variant = "outline" }: IconProps) => {
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
            d="M8.25 6.75L12 3M12 3L15.75 6.75M12 3V21"
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
            d="M11.4697 2.46967C11.7626 2.17678 12.2374 2.17678 12.5303 2.46967L16.2803 6.21967C16.5732 6.51256 16.5732 6.98744 16.2803 7.28033C15.9874 7.57322 15.5126 7.57322 15.2197 7.28033L12.75 4.81066V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V4.81066L8.78033 7.28033C8.48744 7.57322 8.01256 7.57322 7.71967 7.28033C7.42678 6.98744 7.42678 6.51256 7.71967 6.21967L11.4697 2.46967Z"
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
            d="M8.25 6.75L12 3M12 3L15.75 6.75M12 3V21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

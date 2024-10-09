import { type IconProps } from "./index.type";

export const XCircle = ({ variant = "outline" }: IconProps) => {
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
            d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
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
            d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM10.2803 9.21967C9.98744 8.92678 9.51256 8.92678 9.21967 9.21967C8.92678 9.51256 8.92678 9.98744 9.21967 10.2803L10.9393 12L9.21967 13.7197C8.92678 14.0126 8.92678 14.4874 9.21967 14.7803C9.51256 15.0732 9.98744 15.0732 10.2803 14.7803L12 13.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L13.0607 12L14.7803 10.2803C15.0732 9.98744 15.0732 9.51256 14.7803 9.21967C14.4874 8.92678 14.0126 8.92678 13.7197 9.21967L12 10.9393L10.2803 9.21967Z"
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
            d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

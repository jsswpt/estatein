import { type IconProps } from "./index.type";

export const User = ({ variant = "outline" }: IconProps) => {
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
            d="M15.75 6C15.75 8.07107 14.0711 9.75 12 9.75C9.92896 9.75 8.25002 8.07107 8.25002 6C8.25002 3.92893 9.92896 2.25 12 2.25C14.0711 2.25 15.75 3.92893 15.75 6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.50116 20.1182C4.57146 16.0369 7.9019 12.75 12 12.75C16.0983 12.75 19.4287 16.0371 19.4989 20.1185C17.2161 21.166 14.6764 21.75 12.0003 21.75C9.32402 21.75 6.78412 21.1659 4.50116 20.1182Z"
            stroke="white"
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
            d="M7.50003 6C7.50003 3.51472 9.51474 1.5 12 1.5C14.4853 1.5 16.5 3.51472 16.5 6C16.5 8.48528 14.4853 10.5 12 10.5C9.51474 10.5 7.50003 8.48528 7.50003 6Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75127 20.1053C3.82861 15.6156 7.49201 12 12 12C16.5082 12 20.1716 15.6157 20.2488 20.1056C20.2539 20.4034 20.0824 20.676 19.8117 20.8002C17.4327 21.8918 14.7865 22.5 12.0003 22.5C9.21389 22.5 6.56746 21.8917 4.18835 20.7999C3.91768 20.6757 3.74614 20.4031 3.75127 20.1053Z"
            fill="white"
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
            d="M15.75 6C15.75 8.07107 14.0711 9.75 12 9.75C9.92896 9.75 8.25002 8.07107 8.25002 6C8.25002 3.92893 9.92896 2.25 12 2.25C14.0711 2.25 15.75 3.92893 15.75 6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.50116 20.1182C4.57146 16.0369 7.9019 12.75 12 12.75C16.0983 12.75 19.4287 16.0371 19.4989 20.1185C17.2161 21.166 14.6764 21.75 12.0003 21.75C9.32402 21.75 6.78412 21.1659 4.50116 20.1182Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

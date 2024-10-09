import { type IconProps } from "./index.type";

export const Bolt = ({ variant = "outline" }: IconProps) => {
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
            d="M3.75 13.5L14.25 2.25L12 10.5H20.25L9.75 21.75L12 13.5H3.75Z"
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
            d="M14.6152 1.59495C14.9164 1.76289 15.0643 2.11463 14.9736 2.44736L12.9819 9.75003H20.25C20.5486 9.75003 20.8188 9.92721 20.9378 10.2011C21.0569 10.475 21.0021 10.7934 20.7983 11.0118L10.2983 22.2618C10.063 22.5139 9.68601 22.573 9.38478 22.4051C9.08354 22.2372 8.93567 21.8854 9.02641 21.5527L11.018 14.25H3.74999C3.45134 14.25 3.18115 14.0728 3.06213 13.7989C2.9431 13.525 2.99792 13.2066 3.20169 12.9883L13.7017 1.73829C13.937 1.48615 14.314 1.42701 14.6152 1.59495Z"
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
            d="M3.75 13.5L14.25 2.25L12 10.5H20.25L9.75 21.75L12 13.5H3.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

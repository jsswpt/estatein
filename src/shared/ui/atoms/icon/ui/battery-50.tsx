import { type IconProps } from "./index.type";

export const Battery50 = ({ variant = "outline" }: IconProps) => {
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
            d="M21 10.5H21.375C21.9963 10.5 22.5 11.0037 22.5 11.625V13.875C22.5 14.4963 21.9963 15 21.375 15H21M4.5 10.5H11.25V15H4.5V10.5ZM3.75 18H18.75C19.9926 18 21 16.9926 21 15.75V9.75C21 8.50736 19.9926 7.5 18.75 7.5H3.75C2.50736 7.5 1.5 8.50736 1.5 9.75V15.75C1.5 16.9926 2.50736 18 3.75 18Z"
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
            d="M4.5 9.75C4.08579 9.75 3.75 10.0858 3.75 10.5V15C3.75 15.4142 4.08579 15.75 4.5 15.75H11.25C11.6642 15.75 12 15.4142 12 15V10.5C12 10.0858 11.6642 9.75 11.25 9.75H4.5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 6.75C2.09315 6.75 0.75 8.09315 0.75 9.75V15.75C0.75 17.4069 2.09315 18.75 3.75 18.75H18.75C20.4069 18.75 21.75 17.4069 21.75 15.75V15.7125C22.6058 15.5388 23.25 14.7821 23.25 13.875V11.625C23.25 10.7179 22.6058 9.96123 21.75 9.78751V9.75C21.75 8.09315 20.4069 6.75 18.75 6.75H3.75ZM18.75 8.25C19.5784 8.25 20.25 8.92157 20.25 9.75V15.75C20.25 16.5784 19.5784 17.25 18.75 17.25H3.75C2.92157 17.25 2.25 16.5784 2.25 15.75V9.75C2.25 8.92157 2.92157 8.25 3.75 8.25H18.75Z"
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
            d="M21 10.5H21.375C21.9963 10.5 22.5 11.0037 22.5 11.625V13.875C22.5 14.4963 21.9963 15 21.375 15H21M4.5 10.5H11.25V15H4.5V10.5ZM3.75 18H18.75C19.9926 18 21 16.9926 21 15.75V9.75C21 8.50736 19.9926 7.5 18.75 7.5H3.75C2.50736 7.5 1.5 8.50736 1.5 9.75V15.75C1.5 16.9926 2.50736 18 3.75 18Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

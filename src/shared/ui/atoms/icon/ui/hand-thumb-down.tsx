import { type IconProps } from "./index.type";

export const HandThumbDown = ({ variant = "outline" }: IconProps) => {
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
            d="M7.49809 15.25H4.37227C3.34564 15.25 2.4267 14.556 2.31801 13.5351C2.27306 13.1129 2.25 12.6841 2.25 12.25C2.25 9.40238 3.24188 6.78642 4.899 4.72878C5.2866 4.24749 5.88581 4 6.50377 4L10.5198 4C11.0034 4 11.4839 4.07798 11.9428 4.23093L15.0572 5.26908C15.5161 5.42203 15.9966 5.5 16.4803 5.5L17.7745 5.5M7.49809 15.25C8.11638 15.25 8.48896 15.974 8.22337 16.5323C7.75956 17.5074 7.5 18.5984 7.5 19.75C7.5 20.9926 8.50736 22 9.75 22C10.1642 22 10.5 21.6642 10.5 21.25V20.6166C10.5 20.0441 10.6092 19.4769 10.8219 18.9454C11.1257 18.1857 11.7523 17.6144 12.4745 17.2298C13.5883 16.6366 14.5627 15.8162 15.3359 14.8303C15.8335 14.1958 16.5611 13.75 17.3674 13.75H17.7511M7.49809 15.25H9.7M17.7745 5.5C17.7851 5.55001 17.802 5.59962 17.8258 5.6478C18.4175 6.84708 18.75 8.19721 18.75 9.625C18.75 11.1117 18.3895 12.5143 17.7511 13.75M17.7745 5.5C17.6975 5.13534 17.9575 4.75 18.3493 4.75H19.2571C20.1458 4.75 20.9701 5.26802 21.2294 6.11804C21.5679 7.22737 21.75 8.40492 21.75 9.625C21.75 11.1775 21.4552 12.6611 20.9185 14.0229C20.6135 14.797 19.8327 15.25 19.0006 15.25H17.9479C17.476 15.25 17.2027 14.6941 17.4477 14.2907C17.5548 14.1144 17.6561 13.934 17.7511 13.75"
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
            d="M15.7303 5.5L16.7647 5.5C17.5455 6.68343 18 8.10114 18 9.625C18 11.1489 17.5455 12.5666 16.7647 13.75L16.6174 13.75C15.8111 13.75 15.0835 14.1958 14.5859 14.8303C13.8127 15.8162 12.8383 16.6366 11.7245 17.2298C11.0023 17.6144 10.3757 18.1857 10.0719 18.9454C9.85924 19.4769 9.75 20.0441 9.75 20.6166V21.25C9.75 21.6642 9.41421 22 9 22C7.75736 22 6.75 20.9926 6.75 19.75C6.75 18.5984 7.00956 17.5074 7.47337 16.5323C7.73896 15.974 7.36638 15.25 6.74809 15.25L3.62227 15.25C2.59564 15.25 1.6767 14.556 1.56801 13.5351C1.52306 13.1129 1.5 12.6841 1.5 12.25C1.5 9.40238 2.49188 6.78642 4.149 4.72878C4.5366 4.24749 5.13581 4 5.75377 4L9.76975 4C10.2534 4 10.7339 4.07798 11.1928 4.23093L14.3072 5.26908C14.7661 5.42203 15.2466 5.5 15.7303 5.5Z"
            fill="currentColor"
          />
          <path
            d="M21.6685 14.0229C22.2052 12.6611 22.5 11.1775 22.5 9.625C22.5 8.40493 22.3179 7.22738 21.9794 6.11805C21.7201 5.26802 20.8958 4.75 20.0071 4.75L19.0993 4.75C18.6538 4.75 18.3786 5.24827 18.5758 5.6478C19.1675 6.84708 19.5 8.19722 19.5 9.625C19.5 11.3332 19.0241 12.9302 18.1977 14.2907C17.9527 14.6941 18.226 15.25 18.6979 15.25H19.7506C20.5827 15.25 21.3635 14.797 21.6685 14.0229Z"
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
            d="M7.49809 15.25H4.37227C3.34564 15.25 2.4267 14.556 2.31801 13.5351C2.27306 13.1129 2.25 12.6841 2.25 12.25C2.25 9.40238 3.24188 6.78642 4.899 4.72878C5.2866 4.24749 5.88581 4 6.50377 4L10.5198 4C11.0034 4 11.4839 4.07798 11.9428 4.23093L15.0572 5.26908C15.5161 5.42203 15.9966 5.5 16.4803 5.5L17.7745 5.5M7.49809 15.25C8.11638 15.25 8.48896 15.974 8.22337 16.5323C7.75956 17.5074 7.5 18.5984 7.5 19.75C7.5 20.9926 8.50736 22 9.75 22C10.1642 22 10.5 21.6642 10.5 21.25V20.6166C10.5 20.0441 10.6092 19.4769 10.8219 18.9454C11.1257 18.1857 11.7523 17.6144 12.4745 17.2298C13.5883 16.6366 14.5627 15.8162 15.3359 14.8303C15.8335 14.1958 16.5611 13.75 17.3674 13.75H17.7511M7.49809 15.25H9.7M17.7745 5.5C17.7851 5.55001 17.802 5.59962 17.8258 5.6478C18.4175 6.84708 18.75 8.19721 18.75 9.625C18.75 11.1117 18.3895 12.5143 17.7511 13.75M17.7745 5.5C17.6975 5.13534 17.9575 4.75 18.3493 4.75H19.2571C20.1458 4.75 20.9701 5.26802 21.2294 6.11804C21.5679 7.22737 21.75 8.40492 21.75 9.625C21.75 11.1775 21.4552 12.6611 20.9185 14.0229C20.6135 14.797 19.8327 15.25 19.0006 15.25H17.9479C17.476 15.25 17.2027 14.6941 17.4477 14.2907C17.5548 14.1144 17.6561 13.934 17.7511 13.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

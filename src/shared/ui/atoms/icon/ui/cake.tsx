import { type IconProps } from "./index.type";

export const Cake = ({ variant = "outline" }: IconProps) => {
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
            d="M12 8.25006V6.75006M12 8.25006C10.6448 8.25006 9.30281 8.30622 7.97608 8.41633C6.84499 8.51021 6 9.47329 6 10.6083V13.1214M12 8.25006C13.3552 8.25006 14.6972 8.30622 16.0239 8.41633C17.155 8.51021 18 9.47329 18 10.6083V13.1214M15 8.25006V6.75006M9 8.25006V6.75006M21 16.5001L19.5 17.2501C18.5557 17.7222 17.4443 17.7222 16.5 17.2501C15.5557 16.7779 14.4443 16.7779 13.5 17.2501C12.5557 17.7222 11.4443 17.7222 10.5 17.2501C9.55573 16.7779 8.44427 16.7779 7.5 17.2501C6.55573 17.7222 5.44427 17.7222 4.5 17.2501L3 16.5001M18 13.1214C16.0344 12.8763 14.032 12.7501 12 12.7501C9.96804 12.7501 7.96557 12.8763 6 13.1214M18 13.1214C18.3891 13.1699 18.7768 13.2231 19.163 13.2809C20.2321 13.4409 21 14.3748 21 15.4557V20.6251C21 21.2464 20.4963 21.7501 19.875 21.7501H4.125C3.50368 21.7501 3 21.2464 3 20.6251V15.4557C3 14.3748 3.76793 13.4409 4.83697 13.2809C5.22316 13.2231 5.61086 13.1699 6 13.1214M12.2652 3.10989C12.4117 3.25634 12.4117 3.49378 12.2652 3.64022C12.1188 3.78667 11.8813 3.78667 11.7349 3.64022C11.5884 3.49378 11.5884 3.25634 11.7349 3.10989C11.8104 3.03435 12.0001 2.84473 12.0001 2.84473C12.0001 2.84473 12.1943 3.039 12.2652 3.10989ZM9.26522 3.10989C9.41167 3.25634 9.41167 3.49378 9.26522 3.64022C9.11878 3.78667 8.88134 3.78667 8.73489 3.64022C8.58844 3.49378 8.58844 3.25634 8.73489 3.10989C8.81044 3.03435 9.00005 2.84473 9.00005 2.84473C9.00005 2.84473 9.19432 3.039 9.26522 3.10989ZM15.2652 3.10989C15.4117 3.25634 15.4117 3.49378 15.2652 3.64022C15.1188 3.78667 14.8813 3.78667 14.7349 3.64022C14.5884 3.49378 14.5884 3.25634 14.7349 3.10989C14.8104 3.03435 15.0001 2.84473 15.0001 2.84473C15.0001 2.84473 15.1943 3.039 15.2652 3.10989Z"
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
            d="M15 1.78394L14.2045 2.57944C13.7652 3.01878 13.7652 3.73109 14.2045 4.17043C14.6438 4.60977 15.3562 4.60977 15.7955 4.17043C16.2348 3.73109 16.2348 3.01878 15.7955 2.57944L15 1.78394Z"
            fill="currentColor"
          />
          <path
            d="M12 1.78394L11.2045 2.57944C10.7652 3.01878 10.7652 3.73109 11.2045 4.17043C11.6438 4.60977 12.3562 4.60977 12.7955 4.17043C13.2348 3.73109 13.2348 3.01878 12.7955 2.57944L12 1.78394Z"
            fill="white"
          />
          <path
            d="M8.99999 1.78394L8.2045 2.57944C7.76516 3.01878 7.76516 3.73109 8.2045 4.17043C8.64384 4.60977 9.35616 4.60977 9.7955 4.17043C10.2348 3.73109 10.2348 3.01878 9.7955 2.57944L8.99999 1.78394Z"
            fill="white"
          />
          <path
            d="M9.75 7.54663C10.2483 7.52591 10.7483 7.51204 11.25 7.50511V6.74994C11.25 6.33573 11.5858 5.99994 12 5.99994C12.4142 5.99994 12.75 6.33573 12.75 6.74994V7.50511C13.2517 7.51204 13.7517 7.52591 14.25 7.54663V6.74994C14.25 6.33573 14.5858 5.99994 15 5.99994C15.4142 5.99994 15.75 6.33573 15.75 6.74994V7.62996C15.8524 7.63709 15.9547 7.6445 16.0569 7.6522C17.6071 7.769 18.75 9.07926 18.75 10.5976V11.6161C16.5333 11.3741 14.2811 11.2499 12 11.2499C9.71886 11.2499 7.46673 11.3741 5.25 11.6161V10.5976C5.25 9.07926 6.39295 7.769 7.94314 7.6522C8.04534 7.6445 8.14763 7.63709 8.25 7.62996V6.74994C8.25 6.33573 8.58579 5.99994 9 5.99994C9.41421 5.99994 9.75 6.33573 9.75 6.74994V7.54663Z"
            fill="white"
          />
          <path
            d="M12 12.7499C9.52847 12.7499 7.09944 12.9339 4.72596 13.2891C3.27191 13.5066 2.25 14.7716 2.25 16.2056V16.5899C3.11853 16.4285 4.02704 16.5499 4.83541 16.9541C5.56854 17.3207 6.43146 17.3207 7.16459 16.9541C8.32001 16.3764 9.67999 16.3764 10.8354 16.9541C11.5685 17.3207 12.4315 17.3207 13.1646 16.9541C14.32 16.3764 15.68 16.3764 16.8354 16.9541C17.5685 17.3207 18.4315 17.3207 19.1646 16.9541C19.973 16.5499 20.8815 16.4285 21.75 16.5899V16.2056C21.75 14.7716 20.7281 13.5066 19.274 13.2891C16.9006 12.9339 14.4715 12.7499 12 12.7499Z"
            fill="white"
          />
          <path
            d="M21.75 18.1311C21.1195 17.9415 20.4342 17.9964 19.8354 18.2958C18.68 18.8735 17.32 18.8735 16.1646 18.2958C15.4315 17.9292 14.5685 17.9292 13.8354 18.2958C12.68 18.8735 11.32 18.8735 10.1646 18.2958C9.43146 17.9292 8.56854 17.9292 7.83541 18.2958C6.67999 18.8735 5.32001 18.8735 4.16459 18.2958C3.56583 17.9964 2.88049 17.9415 2.25 18.1311V20.6249C2.25 21.6605 3.08947 22.4999 4.125 22.4999H19.875C20.9105 22.4999 21.75 21.6605 21.75 20.6249V18.1311Z"
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
            d="M12 8.25006V6.75006M12 8.25006C10.6448 8.25006 9.30281 8.30622 7.97608 8.41633C6.84499 8.51021 6 9.47329 6 10.6083V13.1214M12 8.25006C13.3552 8.25006 14.6972 8.30622 16.0239 8.41633C17.155 8.51021 18 9.47329 18 10.6083V13.1214M15 8.25006V6.75006M9 8.25006V6.75006M21 16.5001L19.5 17.2501C18.5557 17.7222 17.4443 17.7222 16.5 17.2501C15.5557 16.7779 14.4443 16.7779 13.5 17.2501C12.5557 17.7222 11.4443 17.7222 10.5 17.2501C9.55573 16.7779 8.44427 16.7779 7.5 17.2501C6.55573 17.7222 5.44427 17.7222 4.5 17.2501L3 16.5001M18 13.1214C16.0344 12.8763 14.032 12.7501 12 12.7501C9.96804 12.7501 7.96557 12.8763 6 13.1214M18 13.1214C18.3891 13.1699 18.7768 13.2231 19.163 13.2809C20.2321 13.4409 21 14.3748 21 15.4557V20.6251C21 21.2464 20.4963 21.7501 19.875 21.7501H4.125C3.50368 21.7501 3 21.2464 3 20.6251V15.4557C3 14.3748 3.76793 13.4409 4.83697 13.2809C5.22316 13.2231 5.61086 13.1699 6 13.1214M12.2652 3.10989C12.4117 3.25634 12.4117 3.49378 12.2652 3.64022C12.1188 3.78667 11.8813 3.78667 11.7349 3.64022C11.5884 3.49378 11.5884 3.25634 11.7349 3.10989C11.8104 3.03435 12.0001 2.84473 12.0001 2.84473C12.0001 2.84473 12.1943 3.039 12.2652 3.10989ZM9.26522 3.10989C9.41167 3.25634 9.41167 3.49378 9.26522 3.64022C9.11878 3.78667 8.88134 3.78667 8.73489 3.64022C8.58844 3.49378 8.58844 3.25634 8.73489 3.10989C8.81044 3.03435 9.00005 2.84473 9.00005 2.84473C9.00005 2.84473 9.19432 3.039 9.26522 3.10989ZM15.2652 3.10989C15.4117 3.25634 15.4117 3.49378 15.2652 3.64022C15.1188 3.78667 14.8813 3.78667 14.7349 3.64022C14.5884 3.49378 14.5884 3.25634 14.7349 3.10989C14.8104 3.03435 15.0001 2.84473 15.0001 2.84473C15.0001 2.84473 15.1943 3.039 15.2652 3.10989Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

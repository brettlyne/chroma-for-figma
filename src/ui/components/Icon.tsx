import React from "react";

type IconProps = {
  icon:
    | "eyedropper"
    | "paint_bucket"
    | "copy"
    | "add"
    | "drag_handle"
    | "octocat"
    | "back_arrow"
    | "trash"
    | "small_check"
    | "small_x";
};

const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const svgProps = {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none",
  };

  switch (icon) {
    case "eyedropper":
      return (
        <svg {...svgProps}>
          <g clip-path="url(#a)">
            <path
              fill="currentColor"
              d="M20.15 3.85A2.9 2.9 0 0 1 21 5.91a2.97 2.97 0 0 1-.86 2.19L19.1 9.15l.38.39a1.7 1.7 0 0 1 0 2.4l-.88.87a1.7 1.7 0 0 1-2.4 0l-.38-.38-7.4 7.4a.74.74 0 0 1-.54.22h-.8l-1.92.83a1.54 1.54 0 0 1-2.03-2.02l.83-1.94v-.8c0-.2.08-.38.22-.52l7.4-7.42-.38-.38a1.7 1.7 0 0 1 0-2.4l.89-.88a1.7 1.7 0 0 1 2.4 0l.38.38 1.05-1.05A2.92 2.92 0 0 1 17.97 3a2.96 2.96 0 0 1 2.18.85Zm-7.51 5.4-7.18 7.18v.64c0 .1-.02.2-.06.3l-.9 2.07 2.12-.84c.1-.04.2-.06.3-.06h.64l7.18-7.18-2.1-2.11Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      );

    case "paint_bucket":
      return (
        <svg {...svgProps}>
          <g clip-path="url(#clip0_43_40)">
            <path
              d="M12 2.25C12 2.05109 11.921 1.86032 11.7803 1.71967C11.6397 1.57902 11.4489 1.5 11.25 1.5C11.0511 1.5 10.8603 1.57902 10.7197 1.71967C10.579 1.86032 10.5 2.05109 10.5 2.25V3.5C10.1835 3.61145 9.89609 3.79257 9.65899 4.03L2.77999 10.91C2.57106 11.1189 2.40532 11.367 2.29225 11.64C2.17917 11.9129 2.12097 12.2055 2.12097 12.501C2.12097 12.7965 2.17917 13.0891 2.29225 13.362C2.40532 13.635 2.57106 13.8831 2.77999 14.092L7.65999 18.97C7.86892 19.1789 8.11696 19.3447 8.38995 19.4577C8.66293 19.5708 8.95552 19.629 9.25099 19.629C9.54647 19.629 9.83905 19.5708 10.112 19.4577C10.385 19.3447 10.6331 19.1789 10.842 18.97L17.721 12.091C17.9299 11.8821 18.0957 11.634 18.2087 11.361C18.3218 11.0881 18.38 10.7955 18.38 10.5C18.38 10.2045 18.3218 9.91194 18.2087 9.63896C18.0957 9.36597 17.9299 9.11793 17.721 8.909L12.84 4.03C12.6032 3.7927 12.3161 3.61158 12 3.5V2.25ZM10.5 5.31V6.75C10.5 6.94891 10.579 7.13968 10.7197 7.28033C10.8603 7.42098 11.0511 7.5 11.25 7.5C11.4489 7.5 11.6397 7.42098 11.7803 7.28033C11.921 7.13968 12 6.94891 12 6.75V5.31L16.659 9.97C16.7994 10.1106 16.8783 10.3012 16.8783 10.5C16.8783 10.6988 16.7994 10.8894 16.659 11.03L15.689 12H3.81199L3.84099 11.97L10.5 5.31ZM19.521 13.602C19.4464 13.4623 19.3353 13.3455 19.1995 13.2641C19.0637 13.1826 18.9083 13.1396 18.75 13.1396C18.5916 13.1396 18.4363 13.1826 18.3005 13.2641C18.1647 13.3455 18.0536 13.4623 17.979 13.602L15.971 17.368C14.85 19.466 16.372 22 18.75 22C21.128 22 22.648 19.466 21.53 17.368L19.521 13.602Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_43_40">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case "copy":
      return (
        <svg {...svgProps}>
          <path
            stroke="currentColor"
            stroke-width="1.5"
            d="M14 7c0-1 0-1.4-.2-1.8a2 2 0 0 0-1-1C12.4 4 11.9 4 11 4H8c-1.9 0-2.8 0-3.4.6C4 5.2 4 6 4 8v4c0 1 0 1.4.2 1.8a2 2 0 0 0 1 1c.4.2.9.2 1.8.2"
          />
          <path
            stroke="currentColor"
            stroke-width="1.5"
            d="M18 10h-6a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z"
          />
        </svg>
      );

    case "add":
      return (
        <svg {...svgProps}>
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7a.7.7 0 0 1 .8.8v3.5h3.4a.7.7 0 1 1 0 1.4h-3.4v3.6a.7.7 0 1 1-1.6 0v-3.6H7.8a.7.7 0 1 1 0-1.4h3.5V7.7A.7.7 0 0 1 12 7Z"
          />
        </svg>
      );

    case "drag_handle":
      return (
        <svg {...svgProps}>
          <rect width="14" height="2" x="5" y="7" fill="currentColor" rx="1" />
          <rect width="14" height="2" x="5" y="11" fill="currentColor" rx="1" />
          <rect width="14" height="2" x="5" y="15" fill="currentColor" rx="1" />
        </svg>
      );

    case "octocat":
      return (
        <svg {...svgProps}>
          <g clip-path="url(#a)">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M11.96 0A12 12 0 0 0 0 12.05c0 5.33 3.43 9.84 8.18 11.44.6.12.81-.26.81-.58l-.02-2.24c-3.32.72-4.02-1.43-4.02-1.43-.53-1.4-1.33-1.76-1.33-1.76-1.08-.74.08-.74.08-.74 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.79 1.32 3.48 1 .1-.78.42-1.32.76-1.62-2.66-.28-5.45-1.32-5.45-5.95 0-1.31.47-2.39 1.23-3.23-.12-.3-.54-1.53.12-3.2 0 0 1-.31 3.28 1.25a11.5 11.5 0 0 1 5.99 0c2.27-1.56 3.28-1.24 3.28-1.24.66 1.66.24 2.9.12 3.2a4.63 4.63 0 0 1 1.23 3.22c0 4.63-2.8 5.65-5.47 5.95.44.38.82 1.1.82 2.24l-.02 3.3c0 .33.21.7.8.59 4.76-1.6 8.19-6.1 8.19-11.44A11.98 11.98 0 0 0 11.96 0Z"
              clip-rule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h24v23.51H0z" />
            </clipPath>
          </defs>
        </svg>
      );

    case "trash":
      return (
        <svg {...svgProps}>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M14.09 2.75c.38 0 .76.12 1.07.33.31.22.55.52.67.87l.5 1.42h3c.25 0 .48.1.65.26.17.17.27.39.27.62 0 .23-.1.45-.27.62a.94.94 0 0 1-.65.25h-.91v10.5c0 .7-.3 1.37-.8 1.86-.52.5-1.22.77-1.95.77H8.33c-.73 0-1.43-.28-1.94-.77-.52-.5-.8-1.16-.8-1.86V7.13h-.92a.94.94 0 0 1-.65-.25.86.86 0 0 1-.27-.62c0-.23.1-.45.27-.62.17-.16.4-.25.65-.25h3l.5-1.43c.12-.35.36-.65.67-.87a1.9 1.9 0 0 1 1.07-.33h4.18Zm2.5 4.38H7.41v10.5c0 .23.1.45.27.61.17.17.4.26.64.26h7.34c.24 0 .47-.1.64-.26a.85.85 0 0 0 .27-.61V7.13Zm-2.5-2.63H9.91l-.3.88h4.79l-.31-.88Z"
            clip-rule="evenodd"
          />
        </svg>
      );

    case "back_arrow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="6"
          fill="none"
        >
          <path fill="currentColor" d="M0 3 4.5.4v5.2L0 3Z" />
        </svg>
      );

    case "small_check":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M10.94 1.06c-.05.09-.1.17-.18.24L4.01 8.04a.75.75 0 0 1-1.06 0L.2 5.3a.75.75 0 0 1 1.06-1.06l2.22 2.21L9.7.24a.75.75 0 0 1 1.24.82Z"
          />
        </svg>
      );

    case "small_x":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="m8.35 1.65-7 7M1.35 1.65l7 7M8.35 1.65l-7 7"
          />
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;

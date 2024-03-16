import React from "react";

type IconProps = {
  icon: "eyedropper" | "paint_bucket" | "copy" | "add" | "drag_handle";
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

    default:
      return null;
  }
};

export default Icon;

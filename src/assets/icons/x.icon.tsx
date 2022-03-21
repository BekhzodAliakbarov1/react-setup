import React from 'react';
import { IconType } from 'types/icon.types';

const XIcon: IconType = (props) => (
  <svg
    width={props.size ?? '21'}
    height={props.size ?? '21'}
    viewBox="0 0 21 21"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 21C7.34711 21.0023 4.80218 19.9495 2.9263 18.0737C1.05042 16.1978 -0.00238272 13.6528 4.04939e-06 10.9999V10.7999C0.0817921 6.79217 2.5478 3.2201 6.26637 1.72301C9.98493 0.225912 14.2381 1.09284 17.074 3.92595C19.9365 6.78603 20.7932 11.0893 19.2443 14.8276C17.6955 18.5659 14.0465 21.0023 10 21ZM10 12.4099L12.59 14.9999L14 13.5899L11.41 10.9999L14 8.40995L12.59 6.99995L10 9.58995L7.41001 6.99995L6.00001 8.40995L8.59001 10.9999L6.00001 13.5899L7.41001 14.9999L10 12.4109V12.4099Z"
      fill="currentColor"
    />
  </svg>
);

export default XIcon;

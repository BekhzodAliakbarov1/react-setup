import React from 'react';
import { IconType } from 'types/icon.types';

const FalgIcon: IconType = (props) => (
  <svg
    width={props.size ?? '16'}
    height={props.size ?? '18'}
    viewBox="0 0 16 18"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 17.5C0.947715 17.5 0.5 17.0523 0.5 16.5V1.50005C0.5 0.947764 0.947715 0.500024 1.5 0.500024H7.88C8.26016 0.497403 8.60893 0.710544 8.78 1.05005L9.5 2.50005H14.5C15.0523 2.50005 15.5 2.94776 15.5 3.50005V11.5C15.5 12.0523 15.0523 12.5 14.5 12.5H9.11C8.73344 12.4989 8.38945 12.2863 8.22 11.95L7.5 10.5H2.5V16.5C2.5 17.0523 2.05228 17.5 1.5 17.5ZM2.5 2.50005V8.50005H8.5L9.5 10.5H13.5V4.50005H8.5L7.5 2.50005H2.5Z"
      fill="currentColor"
    />
  </svg>
);

export default FalgIcon;

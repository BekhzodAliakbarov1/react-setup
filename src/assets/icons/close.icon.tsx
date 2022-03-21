import React from 'react';
import { IconType } from 'types/icon.types';

const CloseIcon: IconType = (props) => (
  <svg
    width={props.size ?? '14'}
    height={props.size ?? '14'}
    viewBox="0 0 14 14"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z"
      fill="currentColor"
    />
  </svg>
);

export default CloseIcon;

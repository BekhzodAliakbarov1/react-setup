import React from 'react';
import { IconType } from 'types/icon.types';

const BackIcon: IconType = (props) => (
  <svg
    width={props.size ?? '16'}
    height={props.size ?? '16'}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
      fill="currentColor"
    />
  </svg>
);
// currentColor
// {props.size ?? '16'}
export default BackIcon;

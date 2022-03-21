import React from 'react';
import { IconType } from 'types/icon.types';

const SettingIcon: IconType = (props) => (
  <svg
    width={props.size ?? '20'}
    height={props.size ?? '20'}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.8199 20H8.17992C7.71003 20 7.30347 19.673 7.20292 19.214L6.79592 17.33C6.25297 17.0921 5.73814 16.7946 5.26092 16.443L3.42392 17.028C2.97592 17.1709 2.48891 16.9823 2.25392 16.575L0.429918 13.424C0.197506 13.0165 0.277577 12.5025 0.622918 12.185L2.04792 10.885C1.98312 10.2961 1.98312 9.70189 2.04792 9.113L0.622918 7.816C0.277068 7.49837 0.196966 6.98372 0.429918 6.576L2.24992 3.423C2.48491 3.0157 2.97192 2.82714 3.41992 2.97L5.25692 3.555C5.50098 3.37416 5.75505 3.20722 6.01792 3.055C6.27026 2.91269 6.52995 2.78385 6.79592 2.669L7.20392 0.787C7.30399 0.327969 7.71011 0.000494393 8.17992 0H11.8199C12.2897 0.000494393 12.6958 0.327969 12.7959 0.787L13.2079 2.67C13.4887 2.79352 13.7622 2.93308 14.0269 3.088C14.2739 3.23081 14.5126 3.38739 14.7419 3.557L16.5799 2.972C17.0276 2.82967 17.514 3.01816 17.7489 3.425L19.5689 6.578C19.8013 6.98548 19.7213 7.49951 19.3759 7.817L17.9509 9.117C18.0157 9.70589 18.0157 10.3001 17.9509 10.889L19.3759 12.189C19.7213 12.5065 19.8013 13.0205 19.5689 13.428L17.7489 16.581C17.514 16.9878 17.0276 17.1763 16.5799 17.034L14.7419 16.449C14.5093 16.6203 14.2677 16.7789 14.0179 16.924C13.7557 17.0759 13.4853 17.2131 13.2079 17.335L12.7959 19.214C12.6954 19.6726 12.2894 19.9996 11.8199 20ZM5.61992 14.229L6.43992 14.829C6.62477 14.9652 6.81743 15.0904 7.01692 15.204C7.20462 15.3127 7.39788 15.4115 7.59592 15.5L8.52892 15.909L8.98592 18H11.0159L11.4729 15.908L12.4059 15.499C12.8132 15.3194 13.1998 15.0961 13.5589 14.833L14.3799 14.233L16.4209 14.883L17.4359 13.125L15.8529 11.682L15.9649 10.67C16.0141 10.2274 16.0141 9.78064 15.9649 9.338L15.8529 8.326L17.4369 6.88L16.4209 5.121L14.3799 5.771L13.5589 5.171C13.1997 4.90671 12.8132 4.68175 12.4059 4.5L11.4729 4.091L11.0159 2H8.98592L8.52692 4.092L7.59592 4.5C7.39772 4.58704 7.20444 4.68486 7.01692 4.793C6.81866 4.90633 6.62701 5.03086 6.44292 5.166L5.62192 5.766L3.58192 5.116L2.56492 6.88L4.14792 8.321L4.03592 9.334C3.98672 9.77664 3.98672 10.2234 4.03592 10.666L4.14792 11.678L2.56492 13.121L3.57992 14.879L5.61992 14.229ZM9.99592 14C7.78678 14 5.99592 12.2091 5.99592 10C5.99592 7.79086 7.78678 6 9.99592 6C12.2051 6 13.9959 7.79086 13.9959 10C13.9932 12.208 12.2039 13.9972 9.99592 14ZM9.99592 8C8.90331 8.00111 8.01381 8.87885 7.99815 9.97134C7.98249 11.0638 8.84648 11.9667 9.93861 11.9991C11.0307 12.0315 11.9468 11.1815 11.9959 10.09V10.49V10C11.9959 8.89543 11.1005 8 9.99592 8Z"
      fill="currentColor"
    />
  </svg>
);

export default SettingIcon;
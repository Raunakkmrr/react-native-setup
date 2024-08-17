import * as React from 'react';
import {Path, Svg} from 'react-native-svg';
const PencilSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m16.06.59 1.35 1.35c.79.78.79 2.05 0 2.83L4.18 18H0v-4.18L10.4 3.41 13.23.59c.78-.78 2.05-.78 2.83 0ZM2 16l1.41.06 9.82-9.83-1.41-1.41L2 14.64V16Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default PencilSvg;

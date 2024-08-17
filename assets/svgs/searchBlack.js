import * as React from 'react';
import {Path, Svg} from 'react-native-svg';
import { BLUE } from '../../src/constants/colors';
const SearchBlackSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}>
    <Path
      stroke={BLUE}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 16-3.947-3.947m1.579-4.737A6.316 6.316 0 1 1 1 7.316a6.316 6.316 0 0 1 12.632 0Z"
    />
  </Svg>
);
export default SearchBlackSvg;

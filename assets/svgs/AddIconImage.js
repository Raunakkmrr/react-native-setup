import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function AddIconImage(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.25 7.75H.5v-1.5h5.75V.5h1.5v5.75h5.75v1.5H7.75v5.75h-1.5V7.75z"
        fill="#fff"
      />
    </Svg>
  );
}

export default AddIconImage;

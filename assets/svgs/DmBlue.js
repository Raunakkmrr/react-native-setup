import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DMBlueSvg(props) {
  return (
    <Svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.464 15.357a.864.864 0 01-.636-.257.864.864 0 01-.257-.636v-1.16H17.21l.736.736V3.482h1.161c.253 0 .465.086.636.257a.864.864 0 01.257.636v14.553l-3.571-3.57H4.464zM0 14.554V.893C0 .64.086.428.257.257A.864.864 0 01.893 0h13.84c.252 0 .464.086.635.257a.864.864 0 01.257.636v9.196a.864.864 0 01-.257.636.864.864 0 01-.636.257H3.572L0 14.554zM14.464 9.82v-8.66H1.161v10.268L2.768 9.82h11.696z"
        fill="#036"
      />
    </Svg>
  );
}

export default DMBlueSvg;

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function InactiveJobSvg(props) {
  return (
    <Svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 19c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 010 17V6c0-.55.196-1.02.588-1.412A1.926 1.926 0 012 4h4V2c0-.55.196-1.02.588-1.413A1.926 1.926 0 018 0h4c.55 0 1.02.196 1.412.588C13.804.979 14 1.45 14 2v2h4c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v11c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0118 19H2zm0-2h16V6H2v11zM8 4h4V2H8v2z"
        fill="#fff"
      />
    </Svg>
  );
}

export default InactiveJobSvg;

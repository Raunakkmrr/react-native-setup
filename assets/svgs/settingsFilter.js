import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SettingsFilter(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.5 16v1.5h-1v-5h1v2h8v1h-8v.5zm-5-8V6.5h1v5h-1v-2h-4v-1h4V8zm9-4v1.5h-1v-5h1v2h4v1h-4V4zM.5 15.5v-1h5v1h-5zm8-6v-1h9v1h-9zm-8-6v-1h9v1h-9z"
        fill="#888"
        stroke="#000"
      />
    </Svg>
  );
}

export default SettingsFilter;

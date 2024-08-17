import * as React from "react"
import { Path, Svg } from "react-native-svg"
const EducationSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#036"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3.878 7.962 1.879 6.775a.43.43 0 0 1 0-.742L9.1 1.747a1.765 1.765 0 0 1 1.8 0l7.221 4.286a.43.43 0 0 1 0 .742l-1.999 1.187m-12.244 0 5.222 3.1a1.765 1.765 0 0 0 1.8 0l5.222-3.1m-12.244 0v4.212c0 .607.322 1.17.85 1.484L9.1 16.253a1.765 1.765 0 0 0 1.8 0l4.373-2.595c.527-.313.85-.877.85-1.484V7.962M10 6.5h2.5"
    />
  </Svg>
)
export default EducationSvg

import * as React from "react"
import { Path, Svg } from "react-native-svg"
const BlockSvgBlue = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#036"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3.929 3.929 18.07 18.07M1 11c0 5.523 4.477 10 10 10s10-4.477 10-10S16.523 1 11 1 1 5.477 1 11Z"
    />
  </Svg>
)
export default BlockSvgBlue

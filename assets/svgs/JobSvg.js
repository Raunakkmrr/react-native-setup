import * as React from "react"
import { Path, Svg } from "react-native-svg"
const JobSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#036"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5.667 5.667h-1.5c-.934 0-1.4 0-1.757.181-.314.16-.569.415-.728.729C1.5 6.933 1.5 7.4 1.5 8.333v5.5c0 .934 0 1.4.182 1.757.16.314.414.569.728.728.357.182.823.182 1.757.182h1.5m0-10.833h6.666m-6.666 0v-.834a3.333 3.333 0 1 1 6.666 0v.834m-6.666 0V16.5m6.666-10.833h1.5c.934 0 1.4 0 1.757.181.314.16.569.415.728.729.182.356.182.823.182 1.756v5.5c0 .934 0 1.4-.182 1.757-.16.314-.414.569-.728.728-.357.182-.823.182-1.757.182h-1.5m0-10.833V16.5m-6.666 0h6.666"
    />
  </Svg>
)
export default JobSvg

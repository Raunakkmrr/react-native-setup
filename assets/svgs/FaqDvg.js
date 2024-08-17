import * as React from "react"
import { Path, Svg } from "react-native-svg"
const FaqSvg = (props) => (
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
      d="M11 12a3 3 0 1 0-3-3m2.812 6.313h.375m-.375.374h.375M21 11c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Zm-9.5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </Svg>
)
export default FaqSvg

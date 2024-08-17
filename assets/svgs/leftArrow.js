import * as React from "react"
import { Path, Svg } from "react-native-svg"
const LeftArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C1B1F"
      stroke="#000"
      d="m2.19 6.375 4.345 4.345-.535.53L.75 6 6 .75l.535.531-4.344 4.344h9.059v.75H2.19Z"
    />
  </Svg>
)
export default LeftArrow

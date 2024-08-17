import * as React from "react"
import { Path, Svg } from "react-native-svg"
const ActiveGrid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M.083 10.208V0h10.209v10.208H.083Zm0 13.125V13.125h10.209v10.208H.083Zm13.125-13.125V0h10.209v10.208H13.208Zm0 13.125V13.125h10.209v10.208H13.208Z"
    />
  </Svg>
)
export default ActiveGrid

import * as React from "react"
import { Path, Svg } from "react-native-svg"
const InactiveGrid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M.083 10.208V0h10.209v10.208H.083Zm0 13.125V13.125h10.209v10.208H.083Zm13.125-13.125V0h10.209v10.208H13.208Zm0 13.125V13.125h10.209v10.208H13.208ZM1.542 8.75h7.291V1.458H1.542V8.75Zm13.125 0h7.291V1.458h-7.291V8.75Zm0 13.125h7.291v-7.292h-7.291v7.292Zm-13.125 0h7.291v-7.292H1.542v7.292Z"
    />
  </Svg>
)
export default InactiveGrid

import * as React from "react"
import { Path, Svg } from "react-native-svg"
const ActiveDM = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M6.295 19.295c-.318 0-.584-.108-.8-.323a1.085 1.085 0 0 1-.322-.799v-1.458H22.31l.925.925V4.375h1.458c.318 0 .585.107.8.323.215.215.322.48.322.799v18.285l-4.487-4.487H6.295Zm-5.61-1.01V1.122c0-.318.108-.584.323-.8.215-.214.482-.322.8-.322h17.387c.318 0 .585.108.8.323.215.215.322.48.322.799v11.554c0 .318-.107.585-.322.8a1.085 1.085 0 0 1-.8.322H5.173L.686 18.285Z"
    />
  </Svg>
)
export default ActiveDM

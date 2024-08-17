import * as React from "react"
import { Path, Svg } from "react-native-svg"
const DeleteSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M2.98 15.334c-.41 0-.759-.145-1.047-.433a1.427 1.427 0 0 1-.433-1.048V2.5H.583v-.916H4.25V.878h5.5v.706h3.667V2.5H12.5v11.353c0 .422-.141.774-.424 1.057a1.434 1.434 0 0 1-1.057.424H2.981ZM11.584 2.5H2.417v11.353c0 .164.053.3.158.405.106.106.241.159.406.159h8.038a.54.54 0 0 0 .388-.176.539.539 0 0 0 .176-.388V2.5ZM4.99 12.584h.917v-8.25H4.99v8.25Zm3.103 0h.917v-8.25h-.917v8.25Z"
    />
  </Svg>
)
export default DeleteSvg

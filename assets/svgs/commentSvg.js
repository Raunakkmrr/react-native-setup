import * as React from "react"
import { Path, Svg } from "react-native-svg"
const CommentSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m22 22-4.4-4.4H2.2a2.119 2.119 0 0 1-1.554-.646A2.119 2.119 0 0 1 0 15.4V2.2C0 1.595.215 1.077.646.646 1.077.216 1.595 0 2.2 0h17.6c.605 0 1.123.215 1.554.646.43.431.646.949.646 1.554V22ZM2.2 15.4h16.335l1.265 1.237V2.2H2.2v13.2Z"
    />
  </Svg>
)
export default CommentSvg

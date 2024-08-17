import * as React from "react"
import { Path, Svg } from "react-native-svg"
const SaveSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M0 23V2.556C0 1.853.28 1.25.84.75 1.398.25 2.07 0 2.856 0h14.286c.786 0 1.458.25 2.018.75.56.501.839 1.103.839 1.806V23l-10-3.833L0 23Zm2.857-3.897L10 16.356l7.143 2.747V2.556H2.857v16.547Z"
    />
  </Svg>
)
export default SaveSvg

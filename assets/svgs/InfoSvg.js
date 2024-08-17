import * as React from "react"
import { Path, Svg } from "react-native-svg"
const InfoSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#036"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10 14.01v-5m0-3V6M7.4 19h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C19 15.96 19 14.84 19 12.6V7.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C15.96 1 14.84 1 12.6 1H7.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C1 4.04 1 5.16 1 7.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C4.04 19 5.16 19 7.4 19Z"
    />
  </Svg>
)
export default InfoSvg

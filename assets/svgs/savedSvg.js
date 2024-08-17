import * as React from "react"
import { Path, Svg } from "react-native-svg"
const SavedSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#036"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 3v17.191a.5.5 0 0 0 .724.447l6.382-3.19a2 2 0 0 1 1.788 0l6.382 3.19a.5.5 0 0 0 .724-.447V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2Z"
    />
  </Svg>
)
export default SavedSvg

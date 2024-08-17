import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowLeftSvg(props) {
  return (
    <Svg
      width={12}
      height={20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 20L0 10 10 0l1.775 1.775L3.55 10l8.225 8.225L10 20z"
        fill="#1C1B1F"
      />
    </Svg>
  )
}

export default ArrowLeftSvg

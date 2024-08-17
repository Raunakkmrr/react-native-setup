import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ShareUpSvg(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0 2c5.52 0 10-4.48 10-10S15.52 0 10 0 0 4.48 0 10s4.48 10 10 10zM9 10v4h2v-4h3l-4-4-4 4h3z"
        fill="#036"
      />
    </Svg>
  )
}

export default ShareUpSvg

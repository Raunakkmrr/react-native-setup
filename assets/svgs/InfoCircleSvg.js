import * as React from "react"
import Svg, { Path } from "react-native-svg"

function InfoCircleSvg(props) {
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
        d="M9 5h2v2H9V5zm0 4h2v6H9V9zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="#036"
      />
    </Svg>
  )
}

export default InfoCircleSvg

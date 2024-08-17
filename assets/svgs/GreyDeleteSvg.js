import * as React from "react"
import { Path, Svg } from "react-native-svg"
const GreyDeleteSvg = (props) => (
  <Svg
      width={13}
      height={15}
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.397 14.455c-.41 0-.759-.144-1.048-.433a1.427 1.427 0 01-.432-1.048V1.622H0V.705h3.667V0h5.5v.705h3.666v.917h-.916v11.352c0 .422-.142.774-.424 1.057a1.434 1.434 0 01-1.057.424H2.397zM11 1.622H1.833v11.352c0 .165.053.3.159.406.106.106.24.159.405.159h8.039a.54.54 0 00.388-.177.54.54 0 00.176-.388V1.622zM4.407 11.705h.917v-8.25h-.917v8.25zm3.103 0h.916v-8.25H7.51v8.25z"
        fill="#CDCDCD"
      />
    </Svg>
)
export default GreyDeleteSvg

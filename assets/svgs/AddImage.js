import * as React from "react"
import { Path, Svg } from "react-native-svg"
const AddImageSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#036"
      d="M3.5 27.5a2.889 2.889 0 0 1-2.119-.881A2.89 2.89 0 0 1 .5 24.5v-21c0-.825.294-1.531.881-2.119A2.889 2.889 0 0 1 3.5.5H17v3H3.5v21h21V11h3v13.5c0 .825-.294 1.531-.881 2.119a2.889 2.889 0 0 1-2.119.881h-21Zm18-18v-3h-3v-3h3v-3h3v3h3v3h-3v3h-3ZM5 21.5h18L17.375 14l-4.5 6L9.5 15.5l-4.5 6Z"
    />
  </Svg>
)
export default AddImageSvg

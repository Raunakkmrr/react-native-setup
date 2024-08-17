import * as React from "react"
import { Path, Svg } from "react-native-svg"
const ActiveHome = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M4.92 22.043v-9.91l-2.476 2.776-1.767-.746L13.197 0l12.48 14.163-1.767.746-2.435-2.749v9.883h-6.686v-5.496h-3.184v5.496H4.92Zm6.685-8.75h3.184V11.05h-3.184v2.243Z"
    />
  </Svg>
)
export default ActiveHome

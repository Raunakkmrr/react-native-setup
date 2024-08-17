import * as React from "react"
import { Path, Svg } from "react-native-svg"
const InactiveHome = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M4.92 22.043v-9.91l-2.476 2.776-1.767-.746L13.197 0l12.48 14.163-1.767.746-2.435-2.749v9.883H4.919Zm2.069-1.458h4.616v-4.038h3.184v4.038h4.616V9.821l-6.208-7.028-6.208 7v10.792Zm4.616-7.292V11.05h3.184v2.243h-3.184Z"
    />
  </Svg>
)
export default InactiveHome

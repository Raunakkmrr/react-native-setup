import * as React from "react"
import { Path, Svg } from "react-native-svg"
const PostsSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#036"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8.45 1.5h8.1c2.52 0 3.78 0 4.743.49a4.5 4.5 0 0 1 1.966 1.967c.491.963.491 2.223.491 4.743v3.6c0 2.52 0 3.78-.49 4.743a4.5 4.5 0 0 1-1.967 1.966c-.963.491-2.223.491-4.743.491h-8.1c-2.52 0-3.78 0-4.743-.49a4.5 4.5 0 0 1-1.967-1.967c-.49-.963-.49-2.223-.49-4.743V8.7c0-2.52 0-3.78.49-4.743A4.5 4.5 0 0 1 3.707 1.99C4.67 1.5 5.93 1.5 8.45 1.5Zm1.238 12.365v-6.73c0-.94 1.096-1.471 1.854-.898l4.446 3.365c.6.453.6 1.343 0 1.796l-4.446 3.365c-.758.573-1.854.042-1.854-.898Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default PostsSvg

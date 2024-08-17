import * as React from "react"
import { Path, Svg } from "react-native-svg"
const InactiveProfile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M10.5 8.75c-1.203 0-2.233-.428-3.09-1.285-.857-.857-1.285-1.887-1.285-3.09 0-1.203.428-2.233 1.285-3.09C8.267.428 9.297 0 10.5 0c1.203 0 2.233.428 3.09 1.285.857.857 1.285 1.887 1.285 3.09 0 1.203-.428 2.233-1.285 3.09-.857.857-1.887 1.285-3.09 1.285ZM.292 19.295v-2.4c0-.603.175-1.166.526-1.69a3.53 3.53 0 0 1 1.414-1.222 20.693 20.693 0 0 1 4.131-1.485 17.706 17.706 0 0 1 4.137-.495c1.38 0 2.759.165 4.137.495 1.378.33 2.755.825 4.13 1.485a3.53 3.53 0 0 1 1.416 1.221c.35.525.525 1.088.525 1.69v2.4H.292Zm1.458-1.459h17.5v-.942c0-.323-.104-.627-.313-.911a2.516 2.516 0 0 0-.865-.721 18.512 18.512 0 0 0-3.713-1.336 16.308 16.308 0 0 0-7.718 0 18.51 18.51 0 0 0-3.713 1.336 2.517 2.517 0 0 0-.865.72 1.513 1.513 0 0 0-.313.912v.943ZM10.5 7.293c.802 0 1.489-.286 2.06-.857a2.809 2.809 0 0 0 .857-2.06c0-.802-.286-1.489-.857-2.06a2.809 2.809 0 0 0-2.06-.857c-.802 0-1.489.286-2.06.857a2.809 2.809 0 0 0-.857 2.06c0 .802.286 1.489.857 2.06a2.809 2.809 0 0 0 2.06.857Z"
    />
  </Svg>
)
export default InactiveProfile

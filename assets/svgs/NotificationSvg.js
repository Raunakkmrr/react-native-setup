import * as React from "react"
import { Path, Svg } from "react-native-svg"
const NotificationSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#036"
      d="M0 17v-2h2V8c0-1.383.417-2.612 1.25-3.688C4.083 3.237 5.167 2.534 6.5 2.2v-.7c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 8 0c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C13.583 5.388 14 6.617 14 8v7h2v2H0Zm8 3c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 6 18h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 8 20Zm-4-5h8V8c0-1.1-.392-2.042-1.175-2.825C10.042 4.392 9.1 4 8 4s-2.042.392-2.825 1.175C4.392 5.958 4 6.9 4 8v7Z"
    />
  </Svg>
)
export default NotificationSvg

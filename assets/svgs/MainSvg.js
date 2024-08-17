import * as React from "react"
import { Path, Svg } from "react-native-svg"
const MailSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#036"
      strokeWidth={2}
      d="m2 2 7.772 6.045a2 2 0 0 0 2.456 0L20 2M4.2 17h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 15.48 21 14.92 21 13.8V4.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 1 18.92 1 17.8 1H4.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C1 2.52 1 3.08 1 4.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C2.52 17 3.08 17 4.2 17Z"
    />
  </Svg>
)
export default MailSvg

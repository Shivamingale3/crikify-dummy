import { ComponentProps } from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
const SvgGradientBg = (props: ComponentProps<typeof Svg>) => (
  <Svg
    viewBox="0 0 375 812"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid slice"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
    {...props}
  >
    <Path fill="url(#gradient-bg_svg__a)" d="M0 0h402v874H0z" />
    <Defs>
      <LinearGradient
        id="gradient-bg_svg__a"
        x1={402}
        x2={-71.443}
        y1={73.309}
        y2={123.237}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.004} />
        <Stop offset={1} stopColor="#0C4B72" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgGradientBg;

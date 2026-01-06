import {
  isLiquidGlassSupported,
  LiquidGlassView,
} from "@callstack/liquid-glass";
import React from "react";

const GlassTile = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <LiquidGlassView
      style={[
        { width: "100%", borderRadius: 20, borderWidth: 2, padding: 20 },
        !isLiquidGlassSupported && {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          flexDirection: "row",
          alignItems: "center",
        },
      ]}
      className={className}
      interactive
      effect="regular"
    >
      {children}
    </LiquidGlassView>
  );
};

export default GlassTile;

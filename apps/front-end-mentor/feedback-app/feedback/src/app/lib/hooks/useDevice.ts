import React from "react";
import { useWindowSize } from "rooks";

export function useDeviceType(outerWidth: number | null) {
  if (!outerWidth || outerWidth <= 450) {
    return "mobile";
  }
  if (outerWidth <= 768) {
    return "tablet";
  }
  return "desktop";
}

export function useDevice() {
  const [deviceType, setDeviceType] = React.useState<
    "mobile" | "tablet" | "desktop"
  >("mobile");
  const { outerWidth } = useWindowSize();
  const device = useDeviceType(outerWidth);

  React.useEffect(() => {
    setDeviceType(device);

    return () => {};
  }, [device]);

  return deviceType;
}

import * as React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { setDeviceSize } from "../../state/features/ui";
import { useAppDispatch } from "../../state";

const sizes = {
  huge: "1440px",
  large: "1170px",
  medium: "768px",
  small: "450px",
};

export function useDevice() {
  const dispatch = useAppDispatch();
  const isSmallDevice = useMediaQuery(
    `only screen and (max-width : ${sizes.medium})`
  );
  const isMediumDevice = useMediaQuery(
    `only screen and (min-width : ${sizes.medium}) and (max-width : ${sizes.large})`
  );
  const isLargeDevice = useMediaQuery(
    `only screen and (min-width : ${sizes.large}) and (max-width : ${sizes.huge})`
  );
  const isExtraLargeDevice = useMediaQuery(
    `only screen and (min-width : ${sizes.huge})`
  );

  React.useEffect(() => {
    if (isSmallDevice) {
      dispatch(setDeviceSize("small"));
    }
    if (isMediumDevice) {
      dispatch(setDeviceSize("medium"));
    }
    if (isLargeDevice) {
      dispatch(setDeviceSize("large"));
    }
    if (isExtraLargeDevice) {
      dispatch(setDeviceSize("huge"));
    }
  }, [
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice,
    dispatch,
  ]);
}

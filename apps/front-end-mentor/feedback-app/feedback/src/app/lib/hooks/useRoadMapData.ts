import _ from "lodash";
import { useRecoilValue } from "recoil";
import { roadMapSelector } from "../../state";
import { roadMapNameColors } from "../constants";

export function useRoadMapData() {
  const roadMapData = useRecoilValue(roadMapSelector);
  const keys = _.keys(roadMapData);
  return [{ roadMapData, keys, roadMapNameColors }];
}

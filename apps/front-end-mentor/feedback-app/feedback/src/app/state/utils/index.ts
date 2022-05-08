import _ from "lodash";
import { ProductRequest } from "@feedback/types";
import { makeRoadMapObject, generateCommentCount } from "../../lib/utils";

const includedRoadMapItems = ["planned", "in-progress", "live"];

export function filterProductRequestByStatus(requests: ProductRequest[]) {
  const roadMapRequests = requests.filter((el) =>
    includedRoadMapItems.includes(el.status)
  );
  const data = _.groupBy(roadMapRequests, "status");
  const keys = _.keys(data);
  const output = makeRoadMapObject(keys, data);

  return output;
}

export function filterProductRequestByCategory(requests: ProductRequest[]) {
  const categories = requests.map((el) => _.capitalize(el.category));
  return ["All", ..._.uniq(categories)];
}

export function getCommentCount(requests: ProductRequest[]) {
  return [...requests].map((el) => {
    const commentCount = el?.comments ? generateCommentCount(el.comments) : 0;
    return {
      ...el,
      commentCount,
    };
  });
}

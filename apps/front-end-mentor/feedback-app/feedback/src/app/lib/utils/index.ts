import _ from "lodash";
import { ProductRequest, IComment, IReply } from "@feedback/types";

/**
 * "Given a string, return a dictionary with two keys: color and title."
 * @param {string} name - The name of the status.
 * @returns The color and title of the data.
 */
export function getDataByName(name: string) {
  switch (name) {
    case "in-progress":
      return {
        color: "var(--primary-alpha)",
        title: "Currently being developed",
      };
    case "planned":
      return {
        color: "var(--primary-charlie)",
        title: "Ideas prioritized for research",
      };
    case "live":
      return { color: "var(--primary-delta)", title: "Released features" };
    default:
      return { color: "transparent", title: "" };
  }
}

/**
 * Cannot generate summary
 * @param keys - an array of strings that are the keys of the data object
 * @param {any} data - the data object that we're working with
 * @returns A Record of the data that is being returned.
 */
export function makeRoadMapObject(keys: string[], data: any) {
  return keys.reduce((acc, key) => {
    acc[key] = {
      panelName: _.startCase(key),
      requests: data[key],
      ...getDataByName(key),
    };
    return acc;
  }, <Record<string, { color: string; title: string; requests: ProductRequest[]; panelName: string }>>{});
}

export function generateCommentCount(comments: IComment[] | undefined): number {
  if (!comments) return 0;
  const totalCount = comments.reduce((acc: number, comment: IComment) => {
    const counter = acc + 1;
    const repliesCounter = comment?.replies ? comment.replies.length : 0;
    return counter + repliesCounter;
  }, 0);
  return totalCount;
}

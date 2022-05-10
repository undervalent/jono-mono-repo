import { atom, selector, atomFamily, selectorFamily } from "recoil";
import _ from "lodash";
import { data } from "../data/data";
import { DropdownValue, ProductRequest } from "@feedback/types";
import {
  filterProductRequestByStatus,
  filterProductRequestByCategory,
  getCommentCount,
} from "./utils";

const { currentUser, productRequests } = data;

export const requestsAPI = atom<ProductRequest[]>({
  key: "requestsAPI",
  default: productRequests,
});
export const activeUser = atom({
  key: "currentUser",
  default: currentUser,
});

export const roadMapSelector = selector({
  key: "roadMapSelector",
  get: ({ get }) => {
    const requests = get(requestsAPI);
    return filterProductRequestByStatus(requests);
  },
});

export const filterSelector = selector({
  key: "filterSelector",
  get: ({ get }) => {
    const requests = get(requestsAPI);
    return filterProductRequestByCategory(requests);
  },
});

export const activeFiltersState = atom({
  key: "activeFilters",
  default: ["all"],
});
export const filteredRequests = selector({
  key: "filteredRequests",
  get: ({ get }) => {
    const data = get(requestsAPI);
    const filters = get(activeFiltersState);
    const { value, orderBy } = get(sortByState);
    const filtered =
      filters[0] === "all"
        ? data
        : data.filter((el) => filters.includes(el.category));
    const ouptut = getCommentCount(filtered);

    return _.orderBy(ouptut, [value], [orderBy]);
  },
});

export const sortByState = atom<DropdownValue>({
  key: "sortBy",
  default: {
    label: "Most Upvotes",
    value: "upvotes",
    orderBy: "desc",
  },
});

export const requestItemState = atomFamily({
  key: "requestItem",
  default: selectorFamily({
    key: "requestItem/Default",
    get:
      (param: string | undefined) =>
      ({ get }) => {
        if (!param) return null;
        const requests = get(requestsAPI);

        const filtered = requests.filter((el) => el.id === param)[0];

        return filtered;
      },
  }),
});

export const toggleDrawerState = atom<boolean>({
  key: "toggleDrawerState",
  default: false,
});
export const replyToState = atom<{
  username: string;
  commentId: string;
}>({
  key: "replyToState",
  default: {
    username: "",
    commentId: "",
  },
});

interface Upvotes {
  [key: string]: boolean;
}

export const clickedUpvoteState = atom<Upvotes>({
  key: "clickedUpvoteState",
  default: {},
});

import { atom } from "recoil";

export const themeState = atom<"light" | "dark">({
  key: "themState",
  default: "light",
});

export const usernameState = atom({
key: "username",
default: "octocat"
})

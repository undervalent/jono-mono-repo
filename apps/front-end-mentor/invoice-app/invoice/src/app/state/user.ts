import { atom } from "recoil";
import avatarImage from "../assets/image-avatar.jpg";
export const avatarState = atom<string>({
  key: "avatarState",
  default: avatarImage,
});

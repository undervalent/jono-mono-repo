export interface RootObject {
  currentUser: IUser;
  productRequests: ProductRequest[];
}

export interface ProductRequest {
  id: string;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: IComment[];
}

export interface IComment {
  id: string;
  content: string;
  user: IUser;
  replies?: IReply[];
}

export interface IReply {
  content: string;
  replyingTo: string;
  user: IUser;
}

export interface IUser {
  image: string;
  name: string;
  username: string;
}

export interface DropdownValue {
  label: string;
  value: "upvotes" | "commentCount";
  orderBy: "asc" | "desc";
}

export interface IRoadMapItem {
  color: string;
  title: string;
  requests: ProductRequest[];
  panelName: string;
}

import React from "react";
import { useRecoilValue } from "recoil";
import { filteredRequests } from "../../../../state";
import { RequestItem } from "../../../../components/request-item";
import { Wrapper } from "./request-list.styles";
import { EmptyList } from "./components/empty-list";

export const RequestList = () => {
  const requests = useRecoilValue(filteredRequests);

  const list = requests.length ? (
    requests.map((req) => <RequestItem key={req.id} id={req.id} />)
  ) : (
    <EmptyList />
  );
  return <Wrapper>{list}</Wrapper>;
};

import React from "react";

import { RequestList } from "./components/request-list";
import { RequestHeader } from "./components/request-header";
import { HeaderOptions } from "./components/header-options";

import { Wrapper, DataWrapper } from "./list-view.styles";

export const ListView = () => {
  return (
    <Wrapper>
      <HeaderOptions />
      <DataWrapper>
        <RequestHeader />
        <RequestList />
      </DataWrapper>
    </Wrapper>
  );
};

export default ListView;

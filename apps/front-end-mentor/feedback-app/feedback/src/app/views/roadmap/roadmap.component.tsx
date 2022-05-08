import React from "react";

import { Header } from "./components/header";
import { TabsList } from "./components/tab-list";
import { ColumnList } from "./components/column-list";
import { useDevice } from "../../lib/hooks";
import { Wrapper } from "./roadmap.styles";
export const Roadmap = () => {
  const device = useDevice();
  return (
    <Wrapper>
      <Header />
      {device === "mobile" ? <TabsList /> : <ColumnList />}
    </Wrapper>
  );
};

export default Roadmap;

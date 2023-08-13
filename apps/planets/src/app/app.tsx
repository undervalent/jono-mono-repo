import * as React from 'react';
import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import {  useLocation, RouterProvider, createBrowserRouter  } from "react-router-dom";
import { StatsContainer } from "./components/stats";
import { SideDrawer } from "./components/side-drawer";
import { Toolbar } from "./components/toolbar";
import { Backdrop } from "./components/backdrop";
import { drawerToggleState, currentPlanet, selectedSection } from "./lib/state";
import { TabMenu } from "./components/tab-menu";
import { PanelContent } from "./components/panel-content";
import { ContentWrapper } from "./App.styles";
import { getPath } from "./lib/utils";


export function App() {
const [sideDrawerOpen, setDrawerToggle] = useRecoilState(drawerToggleState);
  const setCurrentPlanet = useSetRecoilState(currentPlanet);
  const resetSelectedSection = useResetRecoilState(selectedSection);
  const { pathname } = useLocation();
  const path = getPath(pathname);
  console.log({ pathname });
  React.useEffect(() => {
    setCurrentPlanet(path || "Earth");
    resetSelectedSection();
    setDrawerToggle(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const backdrop = sideDrawerOpen ? <Backdrop /> : null;

  return (
    <div className="container">
      <Toolbar />
      <SideDrawer />
      {backdrop}
      <main>
        <TabMenu />
        <ContentWrapper>
           <PanelContent />
          <StatsContainer />
        </ContentWrapper>
      </main>
    </div>
  );
}

export default App;

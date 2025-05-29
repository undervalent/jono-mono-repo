import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { StatsContainer } from './components/stats';
import { SideDrawer } from './components/side-drawer';
import { Toolbar } from './components/toolbar';
import { Backdrop } from './components/backdrop';
import { TabMenu } from './components/tab-menu';
import { PanelContent } from './components/panel-content';
import { ContentWrapper } from './App.styles';
import { getPath } from './lib/utils';
import { getIsMenuOpen, closeMenu } from './lib/state/ui';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPlanet } from './lib/state/planets';

export function App() {
  const isMenuOpen = useSelector(getIsMenuOpen);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const path = getPath(pathname);
  console.log({ pathname });
  React.useEffect(() => {
    dispatch(setSelectedPlanet(path || 'Earth'));
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const backdrop = isMenuOpen ? <Backdrop /> : null;

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

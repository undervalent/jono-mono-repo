import React from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { Wrapper, Header, Text, ToggleDrawerBtn } from "./list-header.styles";
import { toggleDrawerState } from "../../../../state";
import { useDevice } from "../../../../lib/hooks";

function useDrawer(): [
  drawerToggle: boolean,
  handlers: { toggleDrawer(): void }
] {
  const [drawerToggle, setDrawerToggle] = useRecoilState(toggleDrawerState);
  const handlers = React.useMemo(
    () => ({
      toggleDrawer: () => {
        setDrawerToggle((state) => !state);
      },
    }),
    [setDrawerToggle]
  );
  return [drawerToggle, handlers];
}

export const ListHeader = () => {
  const [drawerToggle, { toggleDrawer }] = useDrawer();
  const device = useDevice();

  return (
    <Wrapper>
      <div>
        <Header>Frontend Mentor</Header>
        <Text>Feedback Board</Text>
      </div>
      {device === "mobile" && (
        <ToggleDrawerBtn aria-label="toggle drawer" onClick={toggleDrawer}>
          {drawerToggle ? (
            <MdClose color="#fff" size="3.2rem" />
          ) : (
            <AiOutlineMenu color="#fff" size="3.2rem" />
          )}
        </ToggleDrawerBtn>
      )}
    </Wrapper>
  );
};

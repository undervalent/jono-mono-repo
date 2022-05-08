import "./tab-list.styles.css";
import "@reach/tabs/styles.css";
import React from "react";
import _ from "lodash";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import { useRoadMapData } from "../../../../lib/hooks";

import { RoadMapPanel } from "../road-map-panel";

export const TabsList = () => {
  const [{ roadMapData, keys }] = useRoadMapData();

  return (
    <Tabs>
      <TabList>
        {keys.map((el) => (
          <Tab key={el} className={`tab-${el}`}>
            {_.startCase(el)}
            {` (${roadMapData[el].requests.length})`}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {keys.map((el) => (
          <TabPanel key={el}>
            <RoadMapPanel data={roadMapData[el]} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

import React from "react";
import { Etabs, Ewrapper, Econtainer } from "./Experience.styled";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Experience = () => {
  return (
    <Ewrapper>
      <Econtainer>
        <h1 className="e-roles">Experience</h1>
        <Etabs>
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
              <Tab>Title 3</Tab>
              <Tab>Title 4</Tab>
              <Tab>Title 5</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 5</h2>
            </TabPanel>
          </Tabs>
        </Etabs>
      </Econtainer>
    </Ewrapper>
  );
};

export default Experience;
import React from "react";
import { Etabs, Ewrapper, Econtainer } from "./Experience.styled";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TypeAnimation from "react-type-animation";

const Experience = () => {
  return (
    <Ewrapper>
      <Econtainer>
        <h1 className="e-roles">My Experience...</h1>
        <Etabs>
          <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList>
              <Tab>College Website</Tab>
              <Tab>Search Engine</Tab>
              <Tab>AI/ML - Video Object Segmentation</Tab>
              <Tab>IoT - Hydrogen Computer</Tab>
              <Tab>Freelancing Projects</Tab>
            </TabList>

            <TabPanel>
              <h2>College Website</h2>
            </TabPanel>
            <TabPanel>
              <h2>Search Engine</h2>
            </TabPanel>
            <TabPanel>
              <h2>AI/ML - Video Object Segmentation</h2>
            </TabPanel>
            <TabPanel>
              <h2>IoT - Hydrogen Computer</h2>
            </TabPanel>
            <TabPanel>
              <Tabs forceRenderTabPanel>
                <TabList>
                  <Tab>Dispenser Design</Tab>
                  <Tab>LMS</Tab>
                  <Tab>Short Videos - Teaspoon of Hope</Tab>
                  <Tab>Short Film - The Calm after the Score</Tab>
                  <Tab>Music Video JJEC</Tab>
                </TabList>

                <TabPanel>
                  <h2>Dispenser Design</h2>
                </TabPanel>
                <TabPanel>
                  <h2>LMS</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Short Videos</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Short Film</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Music Video</h2>
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </Etabs>
      </Econtainer>
    </Ewrapper>
  );
};

export default Experience;

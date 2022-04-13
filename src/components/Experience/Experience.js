import React from "react";
import { Etabs, Ewrapper, Econtainer } from "./Experience.styled";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TypeAnimation from "react-type-animation";

const Experience = () => {
  return (
    <Ewrapper>
      <Econtainer>
        <h1 className="e-roles">
          {" "}
          My{" "}
          <TypeAnimation
            cursor={true}
            sequence={["Experience...", 2000, "Work...", 2000]}
            wrapper="a"
            repeat={3}
          />
        </h1>
        <Etabs>
          <Tabs>
            <TabList>
              <Tab>New Dreams Data Systems</Tab>
              <Tab>Benette University</Tab>
              <Tab>Freelancing Projects</Tab>
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
          </Tabs>
        </Etabs>
      </Econtainer>
    </Ewrapper>
  );
};

export default Experience;

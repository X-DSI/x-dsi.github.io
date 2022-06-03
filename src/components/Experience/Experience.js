import React from "react";
import { Etabs, Ewrapper, Econtainer } from "./Experience.styled";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TypeAnimation from "react-type-animation";
import experienceData from "../../data/experienceData";
const Experience = () => {
  return (
    <Ewrapper>
      <Econtainer>
        <h1 className="e-roles">
          <div>My &nbsp; </div>
          <TypeAnimation
            cursor={true}
            sequence={[
              "Work...",
              3000,
              "Internship...",
              3000,
              "Experience...",
              3000,
              "Projects...",
              3000,
            ]}
            wrapper="a"
            repeat={Infinity}
          />
        </h1>
        <Etabs>
          <Tabs forceRenderTabPanel defaultIndex={0}>
            <TabList>
              {experienceData.map((item) => (
                <Tab key={item.title + "tab"}>{item.title}</Tab>
              ))}
              {/* <Tab>Freelancing Projects</Tab> */}
            </TabList>

            {experienceData.map((item) => (
              <TabPanel key={item.title + "panel"}>
                <div className="tab-panel">
                  <img src={item.img} alt="" width="250 px" height="200 px" />
                  <h2>{item.description}</h2>
                </div>
              </TabPanel>
            ))}

            {/* <TabPanel>
              <Tabs forceRenderTabPanel>
                <TabList>
                  <Tab>Dispenser Design</Tab>
                  <Tab>LMS</Tab>
                  <Tab>Short Videos - Teaspoon of Hope</Tab>
                  <Tab>Short Film - The Calm after the Score</Tab>
                  <Tab>Music Video JJEC</Tab>
                </TabList>

                <TabPanel>
                  <h2>Designed a Automatic Sanitized Dispenser.</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Worked on setting up a LMS on the Thinkific Platform.</h2>
                </TabPanel>
                <TabPanel>
                  <h2>
                    Created short Videos for the my Church Youtube Channel
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2>
                    Shot and Edited a Short Film to showcase the Team Work and
                    Women Empowerment.
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2>Shot and Edit 8 Video Cover Music Songs</h2>
                </TabPanel>
              </Tabs>
            </TabPanel> */}
          </Tabs>
        </Etabs>
      </Econtainer>
    </Ewrapper>
  );
};

export default Experience;

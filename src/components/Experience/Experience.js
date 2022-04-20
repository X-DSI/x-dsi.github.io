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
          <div>My &nbsp; </div>
          <TypeAnimation
            cursor={true}
            sequence={[
              "Internship...",
              3000,
              "Experience...",
              3000,
              "Work...",
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
              <Tab>College Website</Tab>
              <Tab>Search Engine</Tab>
              <Tab>AI/ML - Video Object Segmentation</Tab>
              <Tab>IoT - Hydrogen Computer</Tab>
              <Tab>Freelancing Projects</Tab>
            </TabList>

            <TabPanel>
              <h2>
                Designed and developed a website for the Government Polytechnic
                College that I studied in, for information interchange with the
                students and parents.
              </h2>
            </TabPanel>
            <TabPanel>
              <h2>
                I got selected for the internship conducted for the pre-final
                and final year students yet when I was in just the 2nd year.
                Worked on an internal search Engine for New Dreams Data Systems,
                Trichy, Tamil Nadu, India. The project was based on the .NET
                Platform. This was a 6 month Internship.
              </h2>
            </TabPanel>
            <TabPanel>
              <h2>
                This was a month long Internship conducted by LeadingIndia.ai at
                Bennette University. Worked on some crazy AI/ML Video Object
                segmentation using the OSVOS model in real time. The project was
                trained using on of the India's fastest supercomputers.
              </h2>
            </TabPanel>
            <TabPanel>
              <h2>
                This was my final year project. I developed a IoT Platform to
                control and Monitor HHO Production Device for the production of
                Electricity.
              </h2>
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
            </TabPanel>
          </Tabs>
        </Etabs>
      </Econtainer>
    </Ewrapper>
  );
};

export default Experience;

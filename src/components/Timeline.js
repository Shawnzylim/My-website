import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { Button } from "./Button";

function Timeline() {
  return (
    <div className="timeline-container">
      {/* <video src="/videos/lava.mp4" autoPlay loop muted /> */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2023- Apr 2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<i className="fa fa-code-fork " aria-hidden="true" />}
        >
          <h3 className="vertical-timeline-element-title">
            Ahamazon SQL Database
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <i>Introduction to Database Systems Module</i>
          </h4>
          <ul>
            <li>
              Designed an ER diagram and developed a well-structured, normalized
              database schema.
            </li>
            <li>
              Generated data and populated the database in SQL Server Management
              Studio.
            </li>
            <li>
              Created SQL statements to solve complex queries and address
              challenging questions.
            </li>
            <li>
              Produced comprehensive documentation detailing the entire process
            </li>
          </ul>
          <div className="button-container">
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              where="https://github.com/Shawnzylim/Introduction-to-Database-Systems"
              target="_blank"
            >
              View More&nbsp;&nbsp;&nbsp;
              <i class="fab fa-github " />
            </Button>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2023- Apr 2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<i className="fa fa-code-fork" />}
        >
          <h3 className="vertical-timeline-element-title">
            OneParkingSG Application
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <i>Software Engineering Module</i>
          </h4>
          <ul>
            <li>
              Analysed of both functional and non-functional requirements and
              designed necessary diagrams
            </li>
            <li>
              Utilized Android Studio's Jetpack Compose and integrated Firebase
              to design the application
            </li>
            <li>
              Produced comprehensive documentation to capture the design,
              implementation, and testing processes
            </li>
          </ul>
          <div className="button-container">
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              where="https://github.com/Shawnzylim/OneParkingSG"
              target="_blank"
            >
              View More&nbsp;&nbsp;&nbsp;
              <i class="fab fa-github " />
            </Button>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022- Aug 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<i className="fa fa-briefcase" />}
        >
          <h3 className="vertical-timeline-element-title">
            Videographer/Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <i>Gushcloud</i>
          </h4>
          <ul>
            <li>
              Operated cameras and other shooting equipment to record footage
              for two video series
            </li>
            <li>
              Actively involved in communicating and managing relations with
              external clients, actors and internal stakeholders
            </li>
            <li>
              Conducted research to collect relevant information and data to
              ensure shoots proceeded smoothly.
            </li>
          </ul>
          <div className="button-container">
            {/* <Button
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              where="/"
            >
              View More
            </Button> */}
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2022- Apr 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<i className="fa fa-code-fork" />}
        >
          <h3 className="vertical-timeline-element-title">
            Predicting Salary Using Machine Learning
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <i>Data Science and Artificial Intelligence Module</i>
          </h4>
          <ul>
            <li>
              Searched and analyzed online sources to select a high-quality
              dataset to perform supervised machine learning data training
            </li>
            <li>
              Conducted data analysis using statistical methods such as pandas
              to uncover insights and trends
            </li>
            <li>
              Used seaborn statistical data visualization to generate visually
              appealing charts and graphs that conveyed key information
            </li>
            <li>
              Leveraged scikit-learn's random forest regression model to develop
              and train a highly accurate machine learning model
            </li>
          </ul>
          <div className="button-container">
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              where="https://github.com/Shawnzylim/SC1015_MiniProject_ComputerScienceSalary"
              target="_blank"
            >
              View More&nbsp;&nbsp;&nbsp;
              <i class="fab fa-github " />
            </Button>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<i class="fa fa-play" aria-hidden="true" />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;

import React from "react";
import { Launch } from "../Launch/Launch";
import "./styles.css";
export class LaunchList extends React.Component {
  render() {
    return (
      <div className="launch-list">
        <Launch
          banner="https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg"
          title="FalconSat"
          launchDate="2006-03-25T10:30:00+12:00"
          description="Description.........."
        />
        <Launch
          banner="https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg"
          title="FalconSat"
          launchDate="2006-03-25T10:30:00+12:00"
          description="Description.........."
        />
        <Launch
          banner="https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg"
          title="FalconSat"
          launchDate="2006-03-25T10:30:00+12:00"
          description="Description.........."
        />
      </div>
    );
  }
}

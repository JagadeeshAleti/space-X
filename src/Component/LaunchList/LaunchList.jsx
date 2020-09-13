import React from "react";
import axios from "axios";
import { Launch } from "../Launch/Launch";
import "./styles.css";
export class LaunchList extends React.Component {
  componentDidMount = () => {
    this.getLaunches();
  };

  getLaunches = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

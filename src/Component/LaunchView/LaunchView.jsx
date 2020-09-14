import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
export class LaunchView extends React.Component {
  state = {
    launch: {},
  };
  componentDidMount = () => {
    const flightNo = this.props.match.params.flight_number;
    this.getLaunchView(flightNo);
  };
  getLaunchView = (flightNo) => {
    axios
      .get("https://api.spacexdata.com/v3/launches/" + flightNo)
      .then((response) => {
        this.setState({
          launch: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  launchAttribute = (title, key) => {
    const value = this.state.launch[key];
    return (
      <div>
        <h1>{title}</h1>
        <h1>{value}</h1>
      </div>
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.launchAttribute("Mission Name", "mission_name")}
        {this.launchAttribute("Flight Number", "flight_number")}
        {this.launchAttribute("Launch Date", "launch_date_local")}
        {this.launchAttribute("Details", "details")}
      </div>
    );
  }
}

export default withRouter(LaunchView);

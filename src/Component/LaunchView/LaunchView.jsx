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
  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <h1>Mission</h1>
          <h1>{this.state.launch.mission_name}</h1>
        </div>

        <div>
          <h1>Flight Number</h1>
          <h1>{this.state.launch.flight_number}</h1>
        </div>

        <div>
          <h1>Launch Date</h1>
          <h1>{this.state.launch.launch_date_local}</h1>
        </div>
        <div>
          <h1>Details</h1>
          <h1>{this.state.launch.details}</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(LaunchView);

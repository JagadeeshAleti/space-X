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
        <h1>Launches</h1>
      </div>
    );
  }
}

export default withRouter(LaunchView);

import React from "react";
import axios from "axios";
export class LaunchView extends React.Component {
  state = {
    launch: {},
  };
  componentDidMount = () => {
    this.getLaunchView();
  };
  getLaunchView = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches/2")
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

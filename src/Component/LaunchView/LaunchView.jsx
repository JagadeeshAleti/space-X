import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import "./styles.css";

export class LaunchView extends React.Component {
  state = {
    launch: {
      links: {
        flickr_images: [],
      },
    },
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
      <div className="attribute">
        <h1>{title}</h1>
        <h1>{value}</h1>
      </div>
    );
  };

  render() {
    const hashImages = this.state.launch.links.flickr_images.length > 0;
    return (
      <div className="launch-view">
        <div className="attibute-section">
          {this.launchAttribute("Mission Name", "mission_name")}
          {this.launchAttribute("Flight Number", "flight_number")}
          {this.launchAttribute("Launch Date", "launch_date_local")}
          <hr />
        </div>
        <div className="flickr_images">
          {hashImages &&
            this.state.launch.links.flickr_images.map((each, index) => (
              <img key={index} style={{ width: "100%" }} src={each} alt={"flight_launch"} />
            ))}
        </div>
        <hr />
        <p className="description">{this.state.launch.details}</p>
      </div>
    );
  }
}

export default withRouter(LaunchView);

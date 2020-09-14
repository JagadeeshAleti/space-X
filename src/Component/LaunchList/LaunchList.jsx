import React from "react";
import axios from "axios";
import { Launch } from "../Launch/Launch";
import "./styles.css";

export class LaunchList extends React.Component {
  state = {
    launches: [],
  };

  componentDidMount = () => {
    this.getLaunches();
  };

  getLaunches = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        this.setState({
          launches: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  launchlist = () => {
    const launchList = this.state.launches.map((launch, index) => {
      const image =
        launch.links.flickr_images.length === 0
          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvtncECc4eL_-DVufFbTrFxAnV54KtACItKg&usqp=CAU"
          : launch.links.flickr_images[0];
      return (
        <Launch
          key={"launch_" + index}
          banner={image}
          title={launch.mission_name}
          launchDate={launch.launch_date_local}
          description={launch.details}
        />
      );
    });
    return launchList;
  };

  render() {
    return <div className="launch-list">{this.launchlist()}</div>;
  }
}

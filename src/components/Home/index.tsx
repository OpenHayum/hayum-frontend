import * as React from "react";
// import PropTypes from "prop-types";

import  "./home.scss";
import Music from "../Music";

class Home extends React.Component<any, any> {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Music />
    );
  }
}

export default Home;
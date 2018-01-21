import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBackground } from "./appActions";
import App from "./index";

const mapStateToProps = ({ app }) => ({
  background: app.background
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeBackground
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);

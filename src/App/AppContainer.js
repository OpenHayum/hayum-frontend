import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import App from "./index";

// const mapStateToProps = ({ app }) => ({
// });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(App);

import React, { Component } from "react";
import PropTypes from "prop-types";
import  "./input.scss";

class Input extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      value,
    };
  }

  handleChange = (e) => {
    const { target } = e;
    this.setState({ value: target.value });
    this.props.onChange(e);
  };

  handleBlur = ({ target }) => {
    const { name, value } = target;
    const { onBlur } = this.props;
    onBlur({ [name]: value });
  };

  render() {
    const { label, value: propsValue, onChange, ...restprops } = this.props;
    const { value } = this.state;

    return (
      <div styleName="Input">
        <h5>{label}</h5>
        <input
          autoComplete="off"
          type="text"
          placeholder="Type here..."
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          {...restprops}
        />
      </div>
    );
  }

}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  onBlur: () => null,
  onChange: () => null,
};

export default Input;

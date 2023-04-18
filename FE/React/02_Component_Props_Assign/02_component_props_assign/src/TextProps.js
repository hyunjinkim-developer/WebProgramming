import React from "react";
import PropTypes from "prop-types";

class TextProps extends React.Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h1>{text}</h1>
        <button onClick={valid}>Button</button>
      </div>
    );
  }
}

TextProps.defaultProps = {
  text: "이건 기본 text props입니다.",
};

TextProps.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextProps;

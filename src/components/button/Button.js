import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, loadMore }) => {
  const onLoadMore = () => {
    loadMore();
  };

  return (
    <button className="Button" type="button" onClick={onLoadMore}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Button;

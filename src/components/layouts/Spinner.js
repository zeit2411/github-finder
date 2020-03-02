import React, { Fragment } from "react";
import spinner from "./spinner.gif";
import PropTypes from "prop-types";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

Spinner.prototype = {
  users: PropTypes.array.isRequired,
  loadding: PropTypes.bool.isRequired
};

export default Spinner;

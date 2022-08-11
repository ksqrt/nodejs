import React from "react";
import PropTypes from "prop-types";

function Show({ id, email, department }) {
  return (
    <div>
      <h3>{id}</h3>
      <h2>{email}</h2>
    </div>
  );
}
Show.propTypes = {
  id: PropTypes.number.isRequired,
  department: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Show;

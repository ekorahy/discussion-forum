import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLink({ to, desc }) {
  return <Link to={to} className="font-Quicksand mx-3 py-2 hover:text-primary hover:border-b border-secondary">{desc}</Link>;
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default NavLink;

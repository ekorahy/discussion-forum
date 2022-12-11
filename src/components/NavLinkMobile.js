import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLinkMobile({
  to, open, setOpen, desc,
}) {
  return <Link to={to} className="block font-Quicksand font-semibold p-4 my-2 hover:bg-primary hover:text-white" onClick={() => setTimeout(() => { setOpen(!open); }, 100)}>{desc}</Link>;
}

NavLinkMobile.propTypes = {
  to: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired,
};

export default NavLinkMobile;

import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = (props) => {
  const activeStyle = { color: "#F15B2A" };
  const { signinStatus } = props;

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/articles" activeStyle={activeStyle}>
        Scientific Articles
      </NavLink>
      {" | "}
      <NavLink to="/signin" activeStyle={activeStyle}>
        {signinStatus ? 'Sign Out': 'Sign In'}
      </NavLink>

    </nav>
  );
};


Header.propType = {
  user: PropTypes.array.isRequired,
  signinStatus: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {

  return {
   user: state.user,
   signinStatus: state.user.signinStatus
  };
}


export default connect(
  mapStateToProps,
  null
)(Header);

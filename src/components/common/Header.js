import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = (props) => {
  const activeStyle = { color: "#F15B2A" };

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
        {props.logStatus ? 'Sign Out': 'Sign In'}
      </NavLink>

    </nav>
  );
};


Header.propType = {
  user: PropTypes.array.isRequired,
  logStatus: PropTypes.bool.isRequired,
}

function mapStateToProps(state, ownProps) {

  return {
   user: state.user,
   logStatus: state.user.logStatus
  };
}


export default connect(
  mapStateToProps,
  null
)(Header);

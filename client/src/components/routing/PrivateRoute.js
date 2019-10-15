import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const { token } = auth;

  return (
    <Route
      {...rest}
      render={props =>
        !token ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  };
};

const mapActionToProps = {};

export default connect(
  mapStateToProps,
  mapActionToProps
)(PrivateRoute);

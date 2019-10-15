import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/authActions';

const About = props => {
  const { loadUser } = props;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>About This App</h1>
      <p className='my-1'>
        This is a full stack React app for keeping contacts
      </p>
      <p className='bg-dark p'>
        <strong>Version: </strong>1.0.0
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapActionToProps = {
  loadUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(About);

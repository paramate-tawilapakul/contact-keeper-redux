import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

const Login = props => {
  const { error, isAuthenticated, token } = props.auth;
  const { login } = props;

  useEffect(() => {
    console.log('useEffect');
    if (token) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      alert(error);
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    console.log('submit');
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill in all fields');
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  };
};

const mapActionToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Login);

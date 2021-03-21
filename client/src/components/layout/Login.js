import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login } from '../../actions/userActions';
import PropTypes from 'prop-types';

const Login = ({ token, loading, error }) => {
  const [user, setUser] = useState({});

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    login(data);
    // history.push('/');
  };

  return (
    <div className="login container-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            ref={register({ required: true })}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.email && (
            <span style={{ marginTop: '10px' }}>This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            ref={register({ required: true })}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          {errors.password && (
            <span style={{ marginTop: '10px' }}>This field is required</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

// Login.propTypes = {
//   token: PropTypes.string.isRequired,
// };

const mapStateToProps = (state) => ({
  token: state.user.token,
  loading: state.loading,
  error: state.error,
});
export default connect(mapStateToProps, { login })(Login);

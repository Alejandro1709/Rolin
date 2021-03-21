import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Login = ({ history }) => {
  const [user, setUser] = useState({});

  const { register, handleSubmit, watch, errors } = useForm();

  const handleLogin = async (formData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post('/api/v1/auth/login', formData, config);

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmit = (data) => {
    handleLogin(data);
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

export default withRouter(Login);

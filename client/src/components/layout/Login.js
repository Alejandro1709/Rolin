import React from 'react';
import { withRouter } from 'react-router-dom';

const Login = ({ history }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    history.push('/');
  };

  return (
    <div className="login container-sm">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default withRouter(Login);

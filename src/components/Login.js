import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('auth/login', this.state.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          this.props.history.push('/products');
        })
        .catch(err => console.log(err));
    };
  
    render() {
      return (
           <div className='form'>
          <form onSubmit={this.login} >
            <h1>Login</h1>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button type='submit'>Log in</button>
            <Link to='/signup'>I do not have an account</Link>
          </form>
          
        </div>
      );
    }
  }
  
  export default Login;
  
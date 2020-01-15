import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = props => {
    const [user, setUser] = useState({
      fullname: '',
      city:'',
      password: '',
      username: ''
    });

    const handleChange = e => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
         axios()
            .post('auth/register', user)
            .then(res => {
            console.log('Add User:', res);
            setUser({
                fullname: '',
                city:'',
                password: '',
                username: ''
            });
          props.history.push('/login');
          window.location.reload(false);
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
            <div className='signup'>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='fullName'
                  value={user.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder='City'
                  name='city'
                  type='text'
                  value={user.city}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                
                <input
                  placeholder='Username'
                  name='username'
                  type='text'
                  value={user.username}
                  onChange={handleChange}
                  required
                />
              <div>
                <button type='submit'>Sign Up</button>
              </div>
                 <Link to='/login'>I already have an account</Link>
               
         </div>
        </form>
      </div>
    );
  };
export default Signup;
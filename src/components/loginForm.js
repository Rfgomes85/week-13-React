// import react 
import React from 'react';

//allows this to be imported by others like the app.js 
export default class LoginForm extends React.Component {
    render() {
        return( //after you render and return you can begin writing the code as html in JSX
    <div className="login-form">
      <h3 className="login-header">Log In</h3>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button className='btn btn-success'>Log in</button>
    </div>
  );
}
}

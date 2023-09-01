import React, { Component } from 'react';
import styles from './SignInForm.module.css';
const initialValues = {
  email: '',
  password: '',
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handleForm = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    //event.target.reset();
    this.setState({ ...initialValues });
  };

  // handleEmail = (event) => {
  //   console.dir(event.target.name);
  //   this.setState({ email: event.target.value });
  // };

  // handlePassword = (event) => {
  //   console.dir(event.target.name);
  //   this.setState({ password: event.target.value });
  // };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleForm}>
        <input
          value={email}
          onChange={this.handleInput}
          type="email"
          name="email"
          placeholder="your email"
        />
        <input
          value={password}
          onChange={this.handleInput}
          type="password"
          name="password"
          placeholder="your password"
        />
        <button type="submit">send</button>
      </form>
    );
  }
}

export default SignInForm;

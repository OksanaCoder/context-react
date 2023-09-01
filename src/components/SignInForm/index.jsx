import React, { Component } from 'react';
import cx from 'classnames';
import styles from './SignInForm.module.css';
const initialValues = {
  email: '',
  password: '',
  emailValid: true,
  passwordValid: true,
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

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      [`${name}Valid`]: value.includes(' ') === false,
    });
  };

  render() {
    const { email, password, emailValid, passwordValid } = this.state;

    const classesEmail = cx(styles.input, { [styles.invalid]: !emailValid });
    const classesPassword = cx(styles.input, {
      [styles.invalid]: !passwordValid,
    });

    return (
      <form className={styles.form} onSubmit={this.handleForm}>
        додати інпут з name='login' з валідацією
        <input
          className={classesEmail}
          value={email}
          onChange={this.handleInput}
          type="email"
          name="email"
          placeholder="your email"
        />
        <input
          className={classesPassword}
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

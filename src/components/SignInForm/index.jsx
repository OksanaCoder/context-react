import React, { Component } from 'react';
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
    // const classesEmail = `${styles.input} ${
    //   emailValid ? styles.valid : styles.invalid
    // }`;
    // const classesPassword = `${styles.input} ${
    //   passwordValid ? styles.valid : styles.invalid
    // }`;
    // const classesEmail = [styles.input];
    // if (emailValid === false) {
    //   classesEmail.push(styles.invalid);
    // }
    // const classesPassword = [styles.input];
    // if (passwordValid === false) {
    //   classesPassword.push(styles.invalid);
    // }
    const classesEmail = createClasses({
      [styles.input]:true,
      [styles.invalid]: !emailValid
    })
    const classesPassword = createClasses({
      [styles.input]:true,
      [styles.invalid]: !passwordValid
    })
    return (
      <form className={styles.form} onSubmit={this.handleForm}>
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

function createClasses(objStyles) {
  return Object.entries(objStyles)
    .filter(([className, condition]) => condition)
    .map(([className, condition]) => className)
    .join(' ');
}

export default SignInForm;

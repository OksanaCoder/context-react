import React, { useState } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";

const SignInForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    emailValid: true,
    passwordValid: true,
    check: false
  });

  const handleForm = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    //event.target.reset();
    setState({ ...state });
  };

  const handleInput = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
      [`${name}Valid`]: value.includes(" ") === false
    });
  };

  const handleCheckbox = ({ target: { name, checked } }) => {
    setState({ ...state, [name]: checked });
  };

  const classesEmail = cx(styles.input, {
    [styles.invalid]: !state.emailValid
  });
  const classesPassword = cx(styles.input, {
    [styles.invalid]: !state.passwordValid
  });

  return (
    <form className={styles.form} onSubmit={handleForm}>
      <div>
        <h2>hw 01-09-2023</h2>
        <p>додати інпут з name='login' з валідацією</p>
        <p>додати інпут з name='check' з type="checkbox"</p>
        <p>додати групу інпутів з name='radio' з type="radio"</p>
      </div>
      <label>
        <input
          onChange={handleCheckbox}
          checked={state.check}
          type="checkbox"
          name="check"
          placeholder="your email"
        />
        check me
      </label>
      <input
        className={classesEmail}
        value={state.email}
        onChange={handleInput}
        type="email"
        name="email"
        placeholder="your email"
      />
      <input
        className={classesPassword}
        value={state.password}
        onChange={this.handleInput}
        type="password"
        name="password"
        placeholder="your password"
      />
      <button type="submit">send</button>
    </form>
  );
};

export default SignInForm;

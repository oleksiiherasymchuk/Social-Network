import React from "react";
import s from "./Login.module.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { getCaptchaUrl, login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

const Login = ({ captchaUrl, handleSubmit, ...props }) => {
  return (
    <div className={s.login}>
      <h1>Please, log in to see user's information</h1>
      <form onSubmit={handleSubmit}>
        <Field
          className={s.formInput}
          name="email"
          component="input"
          placeholder="Enter your email"
          type="email"
        />
        <Field
          className={s.formInput}
          name="password"
          component="input"
          placeholder="Enter your password"
          type="password"
        />
        <Field
          className={s.formInputCheckbox}
          name="rememberMe"
          component="input"
          type="checkbox"
        />{" "}
        Remember me
        <div className={s.captcha}>
          {captchaUrl && <img src={captchaUrl} alt="captcha" />}
          {captchaUrl && (
            <input
              type="text"
              placeholder="Type the characters above"
              name="captcha"
              required
            />
          )}
        </div>
        <button>Log in</button>
      </form>
    </div>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(Login);

const LoginPage = ({
  isAuth,
  ...props
}) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  // let userId = props.userId;

  if (isAuth) {
    // console.log(props.userId);
    return <Navigate to={`/profile/${props.userId}`} />;
  }

  return (
    <>
      <LoginReduxForm
        onSubmit={onSubmit}
        captchaUrl={props.captchaUrl}
        getCaptchaUrl={props.getCaptchaUrl}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
  userId: state.auth.userId
});

export default connect(mapStateToProps, { login, getCaptchaUrl })(LoginPage);

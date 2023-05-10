import React from "react";
import s from "./Login.module.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { getCaptchaUrl, login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

const Login = ({ captchaUrl, handleSubmit }) => {
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
        {/* <button> */}
          <button>Log in</button>
        {/* </button> */}
      </form>
    </div>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(Login);

const LoginPage = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
    // .then(() => {
    //   if (props.isAuth) {
    //     console.log('is auth on login on submit');
    //     return <Navigate to={'/profile'} />
    //   }
    // })
  };

  if (!props.isAuth) {
    console.log("not authorized in login component");
  }

  if (props.isAuth) {
    console.log("you are authorized in login");
    return <Navigate to={`/profile`} />
    // return <Navigate to={`/profile/${userId}`} />
    // withAuthRedirect HOC
    // add withRouter
    // return <Redirect to={"/news"}/>
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
});

export default connect(mapStateToProps, { login, getCaptchaUrl })(LoginPage);

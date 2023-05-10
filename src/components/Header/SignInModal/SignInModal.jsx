// validators on fields (errors and validate)
// icons to fields
import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  // Input, Tooltip, Checkbox
} from "antd";
import s from "./SignInModal.module.css";
// import {
//   InfoCircleOutlined,
//   UserOutlined,
//   SecurityScanOutlined,
// } from "@ant-design/icons";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { getCaptchaUrl, login } from "../../../redux/authReducer";
// import { Navigate } from "react-router-dom";

// const InputEmail = () => {
//   return (
//     <>
//       <Input
//         placeholder="Enter your username"
//         name="email"
//         prefix={<UserOutlined className="site-form-item-icon" />}
//         suffix={
//           <Tooltip title="Extra information">
//             <InfoCircleOutlined
//               style={{
//                 color: "rgba(0,0,0,.45)",
//               }}
//             />
//           </Tooltip>
//         }
//       />
//     </>
//   );
// };

// const InputPassword = () => {
//   return (
//     <Input.Password
//       placeholder="Enter your password"
//       name="password"
//       prefix={<SecurityScanOutlined className="site-form-item-icon" />}
//     />
//   );
// };

// const InputCheckbox = () => {
//   return <Checkbox name="checkbox">Remember me</Checkbox>;
// };

const LoginForm = ({ handleSubmit, captchaUrl, getCaptchaUrl }) => {
  useEffect(() => {
    getCaptchaUrl()
  }, [getCaptchaUrl])
  

  return (
    <div className={s.loginForm}>
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
        <Button type="primary" block>
          log
        </Button>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const SignInModal = (props) => {
  // console.log(props);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (formData) => {
    debugger
    props.login(formData.email, formData.password, formData.rememberMe);
    setIsModalOpen(false)
    console.log(formData);
    // return <Navigate to={`/profile/22342`} />
  };

  return (
    <>
      <div
        type="primary"
        onClick={showModal}
        style={{ height: "40px", borderRadius: "10px", fontSize: "16px", display:'flex', justifyContent:'center', alignItems:'center'
       }}
      >
        Sign In
      </div>
      <Modal
        title="Login Modal"
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} getCaptchaUrl={props.getCaptchaUrl} />
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, getCaptchaUrl })(SignInModal);

// validators on fields (errors and validate)
// icons to fields 

import React, { useState } from "react";
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
import { login } from "../../../redux/authReducer";

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

const LoginForm = ({ handleSubmit }) => {
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
          <Button type="primary" block>
            <button>log in</button>
          </Button>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const SignInModal = (props) => {
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
    props.login(formData.email, formData.password, formData.rememberMe)
  };

  if(props.isAuth) {
    // withAuthRedirect HOC
    // add withRouter
    // return <Redirect to={"/news"}/>
  }


  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ height: "40px", borderRadius: "10px", fontSize: "16px" }}
      >
        Sign In
      </Button>
      <Modal
        title="Login Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(SignInModal);


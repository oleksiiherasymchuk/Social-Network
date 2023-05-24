// // icons to fields
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CaptchaUrl } from "../../../redux/authSelector";
import { getCaptchaUrl, login } from "../../../redux/authReducer";
import s from "./SignInModal.module.css";

const SignInModalWithFormik = ({ captchaUrl, getCaptchaUrl, ...props }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCaptchaUrl();
  }, [getCaptchaUrl]);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const submit = (values, { setSubmitting }) => {
    dispatch(login(values.email, values.password));
    setSubmitting(false);
  };

  return (
    <div className={s.loginForm}>
      <Formik
        initialValues={{ email: "", password: "", toggle: false }}
        validate={validate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="email"
              name="email"
              className={s.formInput}
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red", display: "flex", height: "30px" }}
            />
            <Field
              type="password"
              name="password"
              className={s.formInput}
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red", display: "flex", height: "30px" }}
            />
            <label>
              <Field
                type="checkbox"
                name="toggle"
                className={s.formInputCheckbox}
              />{" "}
              Remember me
            </label>
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
            <div className={s.button}>
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={props.onSubmit}
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const SignInModal = (props) => {
  const captchaUrl = useSelector(CaptchaUrl);

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

  const onSubmit = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        type="primary"
        onClick={showModal}
        style={{
          height: "40px",
          borderRadius: "10px",
          fontSize: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {isAuth && <>{userName}</>}
        {!isAuth && <>Sign In</>} */}
        Sign In
      </div>
      <Modal
        title="Login Modal"
        style={{ textAlign: "center" }}
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <SignInModalWithFormik
          onSubmit={onSubmit}
          captchaUrl={captchaUrl}
          getCaptchaUrl={getCaptchaUrl}
        />
      </Modal>
    </>
  );
};

export default SignInModal;

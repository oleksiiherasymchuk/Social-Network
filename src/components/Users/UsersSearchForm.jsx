import React from "react";
import { Formik, Form, Field } from "formik";
import s from "./UsersSearchForm.module.css";

const UsersSearchForm = ({ onFilterChanged, filter }) => {
  const submit = (values, { setSubmitting }) => {
    const newFilter = {
      term: values.term,
      friend:
        values.friend === "null"
          ? null
          : values.friend === "true"
          ? true
          : false,
    };
    onFilterChanged(newFilter);
    setSubmitting(false);
  };

  return (
    <div className={s.usersSearchFrom}>
      <Formik
        initialValues={filter}
        enableReinitialize={true}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="term"
              className={s.searchInput}
              placeholder="Searching..."
            />
            <Field as="select" name="friend" className={s.searchSelect}>
              <option value="null">All</option>
              <option value="true">Followed</option>
              <option value="false">Unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UsersSearchForm;

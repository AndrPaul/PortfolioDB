import React from "react";
import LogoLight from "../../images/logoLight.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Formik, Field, Form } from "formik";
const Login = () => {
  return (
    <div className="container loginPage">
      <div className="half">
        <img src={LogoLight} alt="" />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="half"
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="loginForm">
            <h2>Sign in</h2>
            <p>
              New user?{" "}
              <Link className="simpleLink" to="/register">
                Create account.
              </Link>
            </p>

            <Field name="email" placeholder="E-mail" type="email" />
            <Field name="password" placeholder="Password" type="password" />
            <button className="btn primary" type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </motion.div>
    </div>
  );
};

export default Login;

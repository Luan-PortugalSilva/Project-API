import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, ContainerFlex } from "../../Styles/register.jsx";
import api from "../services/api";

const schema = Yup.object().shape({
  userName: Yup.string()
    .required("Informe o nome!")
    .min(5, "O nome deve conter mais de 5 letras!")
    .max(100, "O nome deve conter menos de 100 letras!")
    .notOneOf(["admin", "administrador"], "Esse nome não pode camarada!"),
  email: Yup.string()
    .required("Informe o email!")
    .email("Informe um email válido!"),
  password: Yup.string()
    .required("Informe uma senha")
    .min(5, "a senha deve conter no mínimo 5 caracters"),
});

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({ userName: "", email: "", password: "" }),
  handleSubmit: (values) => {
    api
      .post("/users/register", values)
      .then((result, err) => {
        alert("Usuário cadastrado com sucesso");
      })
      .catch((err) => {
        alert("E-mail já cadastrado");
      });
  },
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  displayName: "MyForm",
  validationSchema: schema,
});

const MyForm = (props) => {
  return (
    <Container>
      <Form>
        <h1>Register User</h1>
        <div>
          <Field name="userName" placeholder="Nome" /> <br />
          <ErrorMessage name="userName" />
        </div>
        <div>
          <Field name="email" placeholder="email" />
          <br />
          <ErrorMessage name="email" />
        </div>
        <div>
          <Field name="password" placeholder="password" type="password" />
          <br />
          <ErrorMessage class="erro" name="password" />
        </div>
        <button type="submit">Enviar</button>
      </Form>
      <ContainerFlex>
        <p>
          <a href="/">Login</a>
        </p>
        <p>
          <a href="/forgot">Forgot</a>
        </p>
      </ContainerFlex>
    </Container>
  );
};

export default enhanceWithFormik(MyForm);

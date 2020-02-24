import React from "react";
import { Formik } from "formik";
import * as S from "./Styled";
import Button from "../../../UI/Button";

const FormBasic = () => (
  <>
    <S.Entete>
      <S.BtnHomeLogo src="/favicon.jpg" />
      <S.TitreModal>PHIDBAC.FR</S.TitreModal>
    </S.Entete>

    <Formik
      initialValues={{ email: "", password: "" }}
      validate={values => {
        const errors: any = {};
        if (!values.email) {
          errors.email = "Ce champ est requis.";
        }
        if (!values.password) {
          errors.password = "Ce champ est requis.";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <S.Form onSubmit={handleSubmit}>
          <S.Label title="Votre adresse email :">
            <S.TitreLabel>Votre adresse email :</S.TitreLabel>
            <S.Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <S.ChampErreur>
              {errors.email && touched.email && errors.email}
            </S.ChampErreur>
          </S.Label>
          <S.Label title="Votre mot de passe :">
            <S.TitreLabel>Votre mot de passe :</S.TitreLabel>
            <S.Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <S.ChampErreur>
              {errors.password && touched.password && errors.password}
            </S.ChampErreur>
          </S.Label>

          <Button
            style={{ marginTop: "20px" }}
            type="submit"
            disabled={isSubmitting}
            size="large"
          >
            Se connecter
          </Button>
        </S.Form>
      )}
    </Formik>
  </>
);

export default FormBasic;

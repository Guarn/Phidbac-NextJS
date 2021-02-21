import React from "react";
import { Formik } from "formik";
import * as S from "./Styled";
import Button from "../../../UI/Button";
import cookie from "js-cookie";
import Axios from "../../../Fonctionnels/Axios";
import { useRouter } from "next/router";

interface FormBasicI {
  onCompleted: () => void;
}

const FormBasic = ({ onCompleted }: FormBasicI) => {
  const router = useRouter();
  return (
    <>
      <S.Entete>
        <S.BtnHomeLogo src="/favicon.jpg" />
        <S.TitreModal>PHIDBAC.FR</S.TitreModal>
      </S.Entete>

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
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
          Axios.post("/login", {
            login: values.email,
            pass: values.password,
          })
            .then((rep) => {
              let dateExp = new Date(Date.now());
              dateExp.setDate(365);

              cookie.set("token", "Bearer " + rep.data.token, {
                path: "/",
                domain: ".phidbac.fr",
              });
              router.reload();
            })
            .catch((err) => console.log(err));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
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
};

export default FormBasic;

/* eslint-disable react-refresh/only-export-components */
import { Form, NavLink, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import FormRow from "../components/formRow";
import AuthOverlay from "../components/AuthOverlay";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const resp = await axios.post("/api/v1/auth/register", data);
    localStorage.setItem("token", resp.data.token);
    toast.success("Inscription Réussie");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <main className="full-page authentificate-page">
      <div className="auth-overlay">
        <AuthOverlay
          title="INSCRIPTION"
          description="Inscrivez-vous pour profiter des dernières actualités sur le gaming"
        />
      </div>

      <section className="auth-section">
        <Form method="POST" className="form">
          <FormRow
            type="name"
            name="name"
            labelText="Nom"
            defaultValue="John"
          />

          <FormRow
            type="email"
            name="email"
            labelText="Email"
            defaultValue="john.doe@gmail.com"
          />

          <FormRow
            type="password"
            name="password"
            labelText="Mot de passe"
            defaultValue="john123"
          />
          <div className="btn-container">
            <a href="/authentificate" className="back-btn">
              <BsFillArrowLeftCircleFill />
            </a>
            <button type="submit" className="submit-btn">
              S&apos;inscrire
            </button>
          </div>
          <p>
            Vous avez déjà un compte{" "}
            <NavLink to="/login">Connectez-vous</NavLink>
          </p>
        </Form>
      </section>
    </main>
  );
};
export default Register;

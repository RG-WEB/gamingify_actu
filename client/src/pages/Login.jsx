/* eslint-disable react-refresh/only-export-components */
import { Form, Link, NavLink, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import FormRow from "../components/formRow";
import AuthOverlay from "../components/AuthOverlay";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const resp = await axios.post("/api/v1/auth/login", data);
    localStorage.setItem("token", resp.data.token);
    toast.success("Connexion réussie");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Login = () => {
  return (
    <main className="full-page authentificate-page">
      <div className="auth-overlay">
        <AuthOverlay
          title="CONNEXION"
          description="Connectez-vous pour profiter des dernières actualités sur le gaming"
        />
      </div>
      <section className="auth-section">
        <Form method="POST" className="form">
          <FormRow
            type="Email"
            name="email"
            labelText="Email"
            defaultValue="bob.doe@gmail.com"
          />
          <FormRow
            type="password"
            name="password"
            labelText="Mot de passe"
            defaultValue="bob123"
          />
          <div className="btn-container">
            <Link to="/authentificate" className="back-btn">
              <BsFillArrowLeftCircleFill />
            </Link>
            <button type="submit" className="submit-btn">
              Se connecter
            </button>
          </div>

          <p>
            Vous n&apos;avez pas de compte{" "}
            <NavLink to="/register">Inscrivez-vous</NavLink>
          </p>
        </Form>
      </section>
    </main>
  );
};
export default Login;

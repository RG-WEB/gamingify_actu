import { NavLink } from "react-router-dom";
import AuthOverlay from "../components/AuthOverlay";

const Authentificate = () => {
  return (
    <main className="full-page authentificate-page">
      <div className="auth-overlay">
        <AuthOverlay
          title="AUTHENTIFICATION"
          description="Connectez-vous ou inscrivez-vous pour profiter des dernières actualités sur le gaming"
        />
      </div>
      <section className="auth-btn-container">
        <img
          src="../public/img\profile-user.png"
          className="auth-profile img"
          alt="profile-auth"
        />
        <NavLink to="/login" className="auth-btn">
          Connexion
        </NavLink>

        <NavLink to="/register" className="auth-btn">
          Inscription
        </NavLink>
      </section>
    </main>
  );
};
export default Authentificate;

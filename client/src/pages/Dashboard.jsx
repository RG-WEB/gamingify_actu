// créer un loader qui sert à récupérer mon utilisateur
// si il ne trouve rien, il me renvoie sur login

import { Link, useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const user = useOutletContext();
  return (
    <main className="full-page">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="auth-btn-container full-page">
        <h1>Bienvenue</h1>
        <img
          src="../public/img\profile-user.png"
          className="auth-profile"
          alt="profile-auth"
        />
        <h1>{user?.name}</h1>
        {user?.role === "admin" && (
          <Link to="/dashboard/modifyarticles">Modifier les articles</Link>
        )}
      </div>
    </main>
  );
};
export default Dashboard;

import { Link, useRouteError } from "react-router-dom";
// import img from "../assets/images/not-found.svg";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className="error-page">
        <div className="flow">
          {/* <img src={img} alt="Page Introuvable" /> */}
          <h1>Oups !</h1>
          <p>Nous ne parvenons pas à trouver la page que vous cherchez</p>
          <Link to="/">Retourner à l&apos;accueil</Link>
        </div>
      </main>
    );
  }
  return (
    <main className="error-page">
      <div className="flow">
        {/* <img src={img} alt="Page Introuvable" /> */}
        <h1>Oups !</h1>
        <p>Une erreur s&apos;est produite, veuillez réessayer plus tard</p>
        <pre>{error.statusText || error.message}</pre>
      </div>
    </main>
  );
};
export default ErrorPage;

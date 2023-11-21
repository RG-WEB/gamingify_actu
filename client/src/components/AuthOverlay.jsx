const AuthOverlay = ({ title, description }) => {
  return (
    <>
      <h1 className="auth-title">{title}</h1>
      <p className="auth-desc">{description}</p>
    </>
  );
};
export default AuthOverlay;

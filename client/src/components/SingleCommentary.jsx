const SingleCommentary = ({ commentary, user, date }) => {
  const dateN = new Date(date);
  const formattedDate = dateN.toLocaleDateString("fr-FR");
  const formattedTime = dateN.toLocaleTimeString("fr-FR");

  return (
    <div className="commentary mb-5">
      <p className="content-home commentary-user">{user}</p>
      <p>
        {" "}
        le {formattedDate} à {formattedTime}
      </p>
      <p className="commentary-content">{commentary?.description}</p>
    </div>
  );
};
export default SingleCommentary;

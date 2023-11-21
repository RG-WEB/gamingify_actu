import SingleCommentary from "./SingleCommentary";

const Commentaries = ({ commentaries }) => {
  return (
    <div>
      {commentaries.map((comment) => {
        return (
          <SingleCommentary
            key={comment.commentary_id}
            commentary={comment}
            user={comment.name}
            date={comment.date_of_creation}
            id={comment.commentary_id}
          />
        );
      })}
    </div>
  );
};

export default Commentaries;

import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const CommentaryForm = ({ submitCommentary }) => {
  const [resetValue, setResetValue] = useState("");

  const handleClick = () => {
    setResetValue("");
  };

  return (
    <>
      <FloatingLabel
        className="mb-5"
        controlId="floatingTextarea2"
        placeholder="Ajouter un commentaire"
      >
        <Form.Control
          name="commentary"
          onChange={(event) => setResetValue(event.target.value)}
          method="POST"
          as="textarea"
          style={{ height: "100px" }}
          value={resetValue}
        />
        <button
          type="submit"
          className="submit-btn"
          style={{ textAlign: "center" }}
          onClick={() => {
            submitCommentary(resetValue), handleClick();
          }}
        >
          Publier
        </button>
      </FloatingLabel>
    </>
  );
};
export default CommentaryForm;

//

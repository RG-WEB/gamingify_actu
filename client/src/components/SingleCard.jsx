/* eslint-disable react/prop-types */
import { Form, Link, useOutletContext } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const SingleCard = ({ info, id }) => {
  const { title, description, img, date_of_creation } = info;
  const user = useOutletContext();
  const date = new Date(date_of_creation);
  const formattedDate = date.toLocaleDateString("fr-FR");

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Crée le {formattedDate}</Card.Text>

          <Link to={`/articles/content/${id}`}>Voir l&apos;article</Link>
        </Card.Body>
        {user?.role === "admin" && (
          <Card.Footer>
            <Form
              className="footer-btn-container"
              method="POST"
              action={`/articles/delete/${id}`}
            >
              <button type="submit" className="delete-btn">
                <MdDelete className="delete-btn" />
              </button>
              <button type="button" className="edit-btn">
                <Link to={`/articles/editArticle/${id}`}>
                  <MdEdit className="edit-btn" />
                </Link>
              </button>
            </Form>
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};
export default SingleCard;

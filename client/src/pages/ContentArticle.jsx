import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import CommentaryForm from "../components/CommentaryForm";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import instance from "../api/api_instance";
import Commentaries from "../components/Commentaries";

export const loader = async ({ params: { id } }) => {
  try {
    const {
      data: { user },
    } = await axios(`/api/v1/users/current-user`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const {
      data: { singleArticle: article },
    } = await axios(`/api/v1/articles/${id}`);
    return { user, article };
  } catch (error) {
    console.log(error?.response?.data?.msg);
  }
};

const token = localStorage.getItem("token");

const ContentArticle = () => {
  const { user, article } = useLoaderData();
  const [commentary, setCommentary] = useState({});
  const [commentaries, setCommentaries] = useState([]);

  const { title, img, date_of_creation, content } = article;
  const { name } = user;

  const date = new Date(date_of_creation);
  const formattedDate = date.toLocaleDateString("fr-FR");
  const formattedTime = date.toLocaleTimeString("fr-FR");

  const submitCommentary = async (commentary) => {
    const commentary_schema = {
      description: commentary,
    };

    if (commentary.trim() === "") {
      toast.error("Votre commentaire est vide");
      return;
    }
    try {
      await instance
        .post(`/commentary/${article.article_id}`, commentary_schema, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success("Commentaire ajouté");
          // setRefresh(true);
          getCommentaries(article.article_id);
        });
      // localStorage.setItem("token", resp.data.token);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

  const getCommentaries = async (id) => {
    try {
      await instance.get(`/commentary/${id}`).then((values) => {
        setCommentaries(values.data.items);
        // setRefresh(true);
      });
    } catch (error) {
      console.log(error);
    }
  };
  // setCommentaries()
  useEffect(() => {
    getCommentaries(article.article_id);
  }, []);

  return (
    <main>
      <base target="_blank" />
      <Container className="single-article-page full-page">
        <div className="content-info">
          {img && (
            <div className="banner-container">
              <img src={img} alt="img article" className="banner img" />
            </div>
          )}

          <h1 className="content-title">{title}</h1>
          <div className="user-info">
            <p className="content-author">De {name}</p>
            <p className="content-date">
              Posté le {formattedDate} a {formattedTime}
            </p>
          </div>
        </div>
        <div
          className="content-description"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>

        {commentaries && <Commentaries commentaries={commentaries} />}

        <p className="commentary-title">Ajouter un commentaire</p>

        <CommentaryForm
          submitCommentary={submitCommentary}
          setCommentary={setCommentary}
          commentary={commentary}
        />
      </Container>
    </main>
  );
};

export default ContentArticle;

import axios from "axios";
import { Link, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import PageBtnContainer from "../components/PageBtnContainer";
import SingleCard from "../components/SingleCard";
import Container from "react-bootstrap/esm/Container";
import Title from "../components/Title";
import Row from "react-bootstrap/esm/Row";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const token = localStorage.getItem("token");

  try {
    const { data } = await axios(
      "/api/v1/articles",
      { params },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/login");
  }
};

const ModifyArticles = () => {
  const { data } = useLoaderData();
  const articles = data.allArticles;
  const numOfPages = data.numOfPages;
  const currentPage = data.currentPage;

  return (
    <main>
      <section className="news-section">
        <div className="text-center">
          <Title title="Modifier les articles" />
          <Link to="/addarticle" className="add-btn">
            Ajouter un article
          </Link>
        </div>
        <Container className="mb-4">
          <Row xs={1} md={3} className="g-4">
            {articles.map((article) => {
              return (
                <SingleCard
                  key={article.article_id}
                  info={article}
                  id={article.article_id}
                />
              );
            })}
          </Row>
        </Container>
      </section>
      <PageBtnContainer numOfPages={numOfPages} currentPage={currentPage} />
    </main>
  );
};
export default ModifyArticles;

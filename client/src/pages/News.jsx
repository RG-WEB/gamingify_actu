import { redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../components/SingleCard";
import Title from "../components/Title";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import PageBtnContainer from "../components/PageBtnContainer";

// Le loader va analyser l'url, me renvoyer le nombre de la page grâce à l'url et envoyer en tant que params à la requête de l'API.

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await axios("/api/v1/articles", { params });
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/login");
  }
};

const News = () => {
  const { data } = useLoaderData();
  const articles = data.allArticles;
  const numOfPages = data.numOfPages;
  const currentPage = data.currentPage;

  return (
    <main>
      <section className="news-section">
        <Title title="Actualités" />
        <div className="text-center"></div>
        <Container className="py-3">
          <Row xs={1} md={2} className="g-4">
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
export default News;

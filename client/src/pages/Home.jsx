import { Link, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Carousel from "react-bootstrap/Carousel";
import Title from "../components/Title";

export const loader = async () => {
  const token = localStorage.getItem("token");

  try {
    const { data } = await axios("/api/v1/articles", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/login");
  }
};

const Home = () => {
  return (
    <main className="full-page">
      <Carousel>
        <Carousel.Item>
          <Link to="/articles/content/25">
            <img
              width={900}
              height={500}
              alt=""
              src="../public/img_slider/b1.jpg"
            />
          </Link>
          <Carousel.Caption className="carousel-caption">
            <p className="carousel-text text-light">
              Super Mario Bros Wonder est maintenant disponible
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/articles/content/24">
            <img
              width={900}
              height={500}
              alt=""
              src="../public/img_slider/b2.png"
            />
          </Link>
          <Carousel.Caption className="carousel-caption">
            <p className="carousel-text text-light">
              Sonic Superstars est maintenant disponible
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/articles/content/40">
            <img
              width={900}
              height={500}
              alt=""
              src="../public/img_slider/b3.jpg"
            />
          </Link>
          <Carousel.Caption className="carousel-caption">
            <p className="carousel-text text-light">
              Assassins Creed Mirage est maintenant disponible
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/articles/content/34">
            <img
              width={900}
              height={500}
              alt=""
              src="../public/img_slider/b4.jpg"
            />
          </Link>
          <Carousel.Caption className="carousel-caption">
            <p className="carousel-text text-light">
              Final Fantasy VII Rebirth sort le 27 février 2023
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/articles/content/28">
            <img
              width={900}
              height={500}
              alt=""
              src="../public/img_slider/b5.jpg"
            />
          </Link>
          <Carousel.Caption className="carousel-caption">
            <p className="carousel-text text-light">
              Like a Dragon Infinite Wealth sortira le 26 janvier 2024
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/articles/content/35">
            <img
              width={900}
              height={500}
              alt=""
              src="../public/img_slider/b6.jpeg"
            />
          </Link>
          <Carousel.Caption className="carousel-caption">
            <p className="carousel-text text-light">
              Marvel Spider-Man 2 est maintenant disponible
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="section">
        <Title title="Accueil" />
        <h2 className="text-center p-4 content-home">
          Bienvenue sur Gamingify-Actu
        </h2>
        <h2 className="text-center content-home">
          Vous trouverez toutes les <Link to="/news">actualités</Link> sur les
          derniers jeux sortis
        </h2>
      </section>
    </main>
  );
};

export default Home;

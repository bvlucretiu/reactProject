import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {
  // Generam endpoint-urile pentru categoriile de stiri.
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const businessNewsEndpoint = getNewsCategoriesEndpoint("business", 1, 6);
  const fashionNewsEndpoint = getNewsCategoriesEndpoint("fashion", 1, 6);
  const musicNewsEndpoint = getNewsCategoriesEndpoint("music", 1, 6);
  const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 6);
  const foodNewsEndpoint = getNewsCategoriesEndpoint("food", 1, 6);
  // Fetch-uim datele de la The Guardian.
  let technologyData = useFetch(technologyNewsEndpoint);
  let businessData = useFetch(businessNewsEndpoint);
  let fashionData = useFetch(fashionNewsEndpoint);
  let musicData = useFetch(musicNewsEndpoint);
  let footballData = useFetch(footballNewsEndpoint);
  let foodData = useFetch(foodNewsEndpoint);

  // Adaptam datele de la server la datele necesare componentelor de react.
  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedBusinessData = getNewsList(businessData);
  const adaptedFashionData = getNewsList(fashionData);
  const adaptedMusicData = getNewsList(musicData);
  const adaptedFootballData = getNewsList(footballData);
  const adaptedFoodData = getNewsList(foodData);

  return (
    <Layout>
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          {/* Afisam stirile despre technologie. */}
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="business my-5">
        <Container>
          <h1 className="mb-5 pt-3">Business</h1>
          {/* Afisam stirile despre business. */}
          <NewsCardList newsList={adaptedBusinessData} />
          <p>
            Vezi toate știrile legate de business în secțiunea{" "}
            <Link to="/category/business" className="text-secondary">
              Business
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="fashion my-5">
        <Container>
          <h1 className="mb-5 pt-3">Fashion</h1>
          {/* Afisam stirile despre fashion. */}
          <NewsCardList newsList={adaptedFashionData} />
          <p>
            Vezi toate știrile legate de fashion în secțiunea{" "}
            <Link to="/category/fashion" className="text-secondary">
              Fashion
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="music my-5">
        <Container>
          <h1 className="mb-5 pt-3">Musics</h1>
          {/* Afisam stirile despre muzica. */}
          <NewsCardList newsList={adaptedMusicData} />
          <p>
            Vezi toate știrile legate de muzică în secțiunea{" "}
            <Link to="/category/music" className="text-secondary">
              Musics
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="football my-5">
        <Container>
          <h1 className="mb-5 pt-3">Fotbal</h1>
          {/* Afisam stirile despre fotbal. */}
          <NewsCardList newsList={adaptedFootballData} />
          <p>
            Vezi toate știrile legate de fotbal în secțiunea{" "}
            <Link to="/category/football" className="text-secondary">
              Fotbal
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="food my-5">
        <Container>
          <h1 className="mb-5 pt-3">Foods</h1>
          {/* Afisam stirile despre muzica. */}
          <NewsCardList newsList={adaptedFoodData} />
          <p>
            Vezi toate știrile legate de mâncare în secțiunea{" "}
            <Link to="/category/food" className="text-secondary">
              Foods
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p className="pb-3">
            Vizitează secțiunea{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            pentru a vedea știrile adăugate.
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;

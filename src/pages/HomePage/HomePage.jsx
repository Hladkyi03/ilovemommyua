import { Categories } from "../../components/Categories/Categories";
import { HomePageFooter } from "../../components/HomePageFooter/HomePageFooter";
import { NewCollections } from "../../components/NewCollections/NewCollections";
import { PopularCollections } from "../../components/PopularCollections/PopularCollections";

export const HomePage = () => (
  <>
    <main className="main">
      <NewCollections />

      <Categories />

      <PopularCollections />
    </main>

    <HomePageFooter />
  </>
)

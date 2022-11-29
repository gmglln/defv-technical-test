import styles from "./style";
import { CharacterList, Footer, Navbar, Stats, Hero } from "./components";
import ComicList from "./components/ComicList";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <CharacterList />
        <ComicList />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
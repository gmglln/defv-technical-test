import styles, { layout } from "../style";

import useGetComics from "../hooks/useGetComics";

export default function ComicList() {
  const { comics } = useGetComics();

  return (
    <section id="comics" className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
      <h2 className={styles.heading2}>Comics:</h2>
        {comics.map((character) => (
          <div
            key={character.id}
            className={`flex-row sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt="hero_thumbnail"
              className="sm:w-[192px] w-[192px] object-contain"
            />
            <p className={`${styles.paragraph} mt-4 max-w-[312px]`}> {character.name} </p>
          </div>
        ))}
      </div>
    </section>
  );
}

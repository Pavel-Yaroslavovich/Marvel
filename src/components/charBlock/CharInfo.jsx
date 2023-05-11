import styles from "./charBlock.module.css";

const CharInfo = ({ oneObjClick }) => {
  let dataComics = [];
  for (let i = 0; i < oneObjClick.comics.items.length; i++) {
    dataComics.push(oneObjClick.comics.items[i].name);
  }

  const dataComicsResult = dataComics.map((elem, index) => {
    return (
      <ul className={styles.list} key={index}>
        <li className={styles.link}>{elem}</li>
      </ul>
    );
  });

  return (
    <div className={styles.charInfoBlock}>
      <div className={styles.photoBtnsBlock}>
        <img
          src={`${oneObjClick?.thumbnail.path}.${oneObjClick?.thumbnail.extension}`}
          alt="avatar"
          className={styles.avatar}
        />
        <div className={styles.titleBtns}>
          <h2 className={styles.title}>{oneObjClick?.name}</h2>
          <a href="##" className={styles.main}>
            <div className={styles.inner}>homepage</div>
          </a>
          <a href="##" className={styles.secondary}>
            <div className={styles.inner}>Wiki</div>
          </a>
        </div>
      </div>
      <p className={styles.text}>
        {oneObjClick?.description ? oneObjClick?.description : "Описания нет!"}
      </p>
      <h5 className={styles.subTitle}>Comics:</h5>
      <>
        {oneObjClick.comics.items.length > 0
          ? dataComicsResult
          : "Описания нет!"}
      </>
    </div>
  );
};

export default CharInfo;

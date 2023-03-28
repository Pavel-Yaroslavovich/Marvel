import styles from "./randomchar.module.css";

const View = ({ thumbnail, name, description }) => {
  return (
    <div className={styles.randomchar__block}>
      <img
        src={thumbnail}
        alt="Random character"
        className={styles.randomchar__img}
      />
      <div className={styles.randomchar__info}>
        <p className={styles.randomchar__name}>{name}</p>
        <p className={styles.randomchar__descr}>
          {description ? description : "Описания нет!"}
        </p>
        <div className={styles.randomchar__btns}>
          <a href="!#" className={styles.button__main}>
            <div className={styles.inner}>homepage</div>
          </a>
          <a href="!#" className={styles.button__secondary}>
            <div className={styles.inner}>Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default View;

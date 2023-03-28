import styles from "./randomchar.module.css";
import shield from "../img/shield.png";
import mjolnir from "../img/mjolnir.png";
import Spinner from "../spinner/Spinner.js";

import View from "./View";

const RandomChar = ({ char, isLoading, randomCharBtn }) => {
  return (
    <div className={styles.randomchar}>
      {isLoading ? (
        <Spinner />
      ) : (
        <View
          name={char?.name}
          description={char?.description}
          thumbnail={`${char?.thumbnail.path}.${char?.thumbnail.extension}`}
        />
      )}

      <div className={styles.randomchar__static}>
        <p className={styles.randomchar__title}>
          Random character for today <br />
          Do you want to get to know him better?
        </p>
        <p className={styles.randomchar__title}>Or choose another one</p>
        <button className={styles.button__main} onClick={() => randomCharBtn()}>
          <div className={styles.inner}>try it</div>
        </button>
        <img src={shield} alt="shield" className={styles.randomchar__shield} />
        <img
          src={mjolnir}
          alt="shield"
          className={styles.randomchar__mjolnir}
        />
      </div>
    </div>
  );
};

export default RandomChar;

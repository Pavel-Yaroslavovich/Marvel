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

      <div className={styles.static}>
        <p className={styles.title}>
          Random character for today <br />
          Do you want to get to know him better?
        </p>
        <p className={styles.title}>Or choose another one</p>
        <div className={styles.button__main} onClick={() => randomCharBtn()}>
          <div className={styles.inner}>update</div>
        </div>
        <img src={shield} alt="shield" className={styles.shield} />
        <img src={mjolnir} alt="shield" className={styles.mjolnir} />
      </div>
    </div>
  );
};

export default RandomChar;

import Spinner from "../spinner/Spinner";
import styles from "./charBlock.module.css";
// import { calc } from "../../App";

const CharList = ({ isLoading, nineChars }) => {
  return (
    <div className={styles.charList}>
      {isLoading ? (
        <Spinner />
      ) : (
        // { mass }
        <div className={styles.card} key={"elem.id"}>
          <img src="!#" alt="foto" className={styles.cardImg} />
          <div className={styles.cardTitle}>{"nineChars.name"}</div>
        </div>
      )}
    </div>
  );
};

export default CharList;

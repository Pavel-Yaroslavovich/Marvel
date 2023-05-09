import Spinner from "../spinner/Spinner";
import styles from "./charBlock.module.css";
import classNames from "classnames";
import { nanoid } from "nanoid";

export const randomId = () => {
  return nanoid();
};

const CharList = ({ isLoading, arrNineChars, clickChoiceChar, choiceChar }) => {
  const resNineChars = arrNineChars?.map((elem, index) => {
    return (
      <div
        className={classNames(
          styles.card,
          choiceChar === index ? styles.fonCard : ""
        )}
        key={randomId()}
        onClick={() => clickChoiceChar(index)}
      >
        <img
          src={`${elem?.thumbnail.path}.${elem?.thumbnail.extension}`}
          alt="foto"
          className={styles.cardImg}
        />
        <div className={styles.cardTitle}>{elem?.name}</div>
      </div>
    );
  });

  return (
    <div className={styles.charList}>
      {isLoading ? <Spinner /> : <>{resNineChars}</>}
    </div>
  );
};

export default CharList;

import styles from "./charBlock.module.css";
import CharList from "./CharList";
import CharInfo from "./CharInfo";

const CharBlock = ({ isLoading, arrNineChars, clickChoiceChar }) => {
  return (
    <div className={styles.content}>
      <CharList
        isLoading={isLoading}
        arrNineChars={arrNineChars}
        clickChoiceChar={clickChoiceChar}
      />
      <CharInfo />
    </div>
  );
};

export default CharBlock;

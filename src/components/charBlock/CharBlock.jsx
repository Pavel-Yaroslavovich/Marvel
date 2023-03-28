import styles from "./charBlock.module.css";
import CharList from "./CharList";
import CharInfo from "./CharInfo";

const CharBlock = ({ isLoading, nineChars }) => {
  return (
    <div className={styles.content}>
      <CharList isLoading={isLoading} nineChars={nineChars} />
      <CharInfo />
    </div>
  );
};

export default CharBlock;

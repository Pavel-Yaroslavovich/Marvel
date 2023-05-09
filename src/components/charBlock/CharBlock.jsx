import styles from "./charBlock.module.css";
import CharList from "./CharList";
import CharInfo from "./CharInfo";
import heroPicture from "../img/asset.png";

const CharBlock = ({
  isLoading,
  arrNineChars,
  clickChoiceChar,
  oneObjClick,
  showInfoChar,
  choiceChar,
  randomUpgradeHeroes,
}) => {
  return (
    <>
      <div className={styles.content}>
        <CharList
          isLoading={isLoading}
          arrNineChars={arrNineChars}
          clickChoiceChar={clickChoiceChar}
          choiceChar={choiceChar}
        />
        {showInfoChar && <CharInfo oneObjClick={oneObjClick} />}
        <img src={heroPicture} alt="super hero" className={styles.superHero} />
        <div className={styles.wrap}>
          <button
            className={styles.button}
            onClick={() => randomUpgradeHeroes()}
          >
            upgrade heroes
          </button>
        </div>
      </div>
    </>
  );
};

export default CharBlock;

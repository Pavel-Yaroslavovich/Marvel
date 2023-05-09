import { useEffect, useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharBlock from "../charBlock/CharBlock";

export const calc = () => {
  return Math.floor(Math.random() * 100);
};

const Characters = () => {
  const [allChars, setAllChars] = useState();
  const [randomChar, setRandomChar] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [nineChars, setNineChar] = useState();
  const [choiceChar, setChoiceChar] = useState(false);
  const [showInfoChar, setShowInfoChar] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=031fa526cb3f1b0273bccb5337a88faa`
    )
      .then((results) => results.json())
      .then((elem) => {
        const elemObj = elem.data.results;
        const arrNineChars = [];
        for (let i = 0; i < 9; i++) {
          arrNineChars.push(elemObj?.[calc()]);
        }
        setAllChars(elemObj);
        setRandomChar(elemObj?.[calc()]);
        setNineChar(arrNineChars);
        setIsLoading(false);
      });
  }, []);

  const randomCharBtn = () => {
    setRandomChar(allChars?.[calc()]);
  };
  const clickChoiceChar = (index) => {
    setChoiceChar(index);
    setShowInfoChar(true);
  };

  const randomUpgradeHeroes = () => {
    const upgradeNineChars = [];
    for (let i = 0; i < 9; i++) {
      upgradeNineChars.push(allChars?.[calc()]);
    }
    setNineChar(upgradeNineChars);
  };

  const oneObjClick = nineChars?.[choiceChar];

  return (
    <>
      <RandomChar
        char={randomChar}
        isLoading={isLoading}
        randomCharBtn={randomCharBtn}
      />
      <CharBlock
        arrNineChars={nineChars}
        isLoading={isLoading}
        clickChoiceChar={clickChoiceChar}
        oneObjClick={oneObjClick}
        showInfoChar={showInfoChar}
        choiceChar={choiceChar}
        randomUpgradeHeroes={randomUpgradeHeroes}
      />
    </>
  );
};

export default Characters;

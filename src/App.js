import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import RandomChar from "./components/randomChar/RandomChar";
import CharBlock from "./components/charBlock/CharBlock";

export const calc = () => {
  return Math.floor(Math.random() * 100);
};

function App() {
  const [allChars, setAllChars] = useState();
  const [randomChar, setRandomChar] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [nineChars, setNineChar] = useState();
  const [choiceChar, setChoiceChar] = useState(false);

  // const [homepage, setHomepage] = useState();
  // const [wiki, setWiki] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=031fa526cb3f1b0273bccb5337a88faa`
    )
      .then((results) => results.json())
      .then((elem) => {
        const arrNineChars = [];
        for (let i = 0; i < 9; i++) {
          arrNineChars.push(elem.data.results?.[calc()]);
        }
        setAllChars(elem.data.results);
        setRandomChar(elem.data.results?.[calc()]);
        setNineChar(arrNineChars);
        // setHomepage(elem.data.results[0].urls[0].url);
        // setWiki(elem.data.results[0].urls[1].url);
        setIsLoading(false);
      });
  }, []);

  const randomCharBtn = () => {
    setRandomChar(allChars?.[calc()]);
  };

  let vass = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const clickChoiceChar = () => {
    console.log(setChoiceChar(!choiceChar));
  };

  return (
    <div className="App">
      <Header />
      <RandomChar
        char={randomChar}
        isLoading={isLoading}
        randomCharBtn={randomCharBtn}
      />
      <CharBlock
        arrNineChars={nineChars}
        isLoading={isLoading}
        clickChoiceChar={clickChoiceChar}
      />
    </div>
  );
}

export default App;

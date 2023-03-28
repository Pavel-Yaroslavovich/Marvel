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

  // const [homepage, setHomepage] = useState();
  // const [wiki, setWiki] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=031fa526cb3f1b0273bccb5337a88faa`
    )
      .then((results) => results.json())
      .then((elem) => {
        setAllChars(elem.data.results);
        setRandomChar(elem.data.results?.[calc()]);
        setNineChar(elem.data.results);
        // setHomepage(elem.data.results[0].urls[0].url);
        // setWiki(elem.data.results[0].urls[1].url);
        setIsLoading(false);
      });
  }, []);

  const randomCharBtn = () => {
    setRandomChar(allChars?.[calc()]);
  };

  return (
    <div className="App">
      <Header />
      <RandomChar
        char={randomChar}
        isLoading={isLoading}
        randomCharBtn={randomCharBtn}
      />
      <CharBlock nineChars={nineChars} isLoading={isLoading} />
    </div>
  );
}

export default App;

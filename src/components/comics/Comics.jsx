import { useEffect, useState } from "react";
import { calc } from "../characters/Characters";
import Spinner from "../spinner/Spinner";
import ComicsHeader from "./comicsHeader/ComicsHeader";
import ComicsCard from "./comicsCard/ComicsCard";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=031fa526cb3f1b0273bccb5337a88faa`
    )
      .then((results) => results.json())
      .then((elem) => {
        const arrEightСharacters = [];

        let i = 0;
        while (i < 8) {
          const character = elem.data.results[calc()];
          if (character.comics.items[0]) {
            arrEightСharacters.push(character);
            i++;
          }
        }

        let arrEightСomics = [];
        for (let i = 0; i < 8; i++) {
          if (arrEightСharacters[i].comics.items[0]) {
            const arrUrlS =
              arrEightСharacters[i].comics.items[0].resourceURI.split("");
            arrUrlS.splice(4, 0, "s");
            const resultArrUrlS = arrUrlS.join("");
            arrEightСomics.push(
              fetch(
                `${resultArrUrlS}?limit=100&apikey=031fa526cb3f1b0273bccb5337a88faa`
              )
            );
          }
        }

        Promise.all(arrEightСomics).then((el) => {
          el.forEach(async (item) => {
            let per = await item.json();
            setComics((prev) => [...prev, per]);
          });
        });
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <ComicsHeader />
      {isLoading ? <Spinner /> : <ComicsCard comics={comics} />}
    </div>
  );
};

export default Comics;

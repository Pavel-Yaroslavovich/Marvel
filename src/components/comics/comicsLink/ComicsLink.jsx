import styles from "./comicsLink.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { randomId } from "../../charBlock/CharList";
import ComicsHeader from "../comicsHeader/ComicsHeader";

const ComicsLink = () => {
  const index = randomId();
  const location = useLocation();
  const { comicsCard } = location.state;

  const description = comicsCard.data.results[0].description ?? "Описания нет!";
  const textObjects = comicsCard.data.results[0].textObjects[0];

  return (
    <div>
      <ComicsHeader />
      <div className={styles.infoBlock} key={index}>
        <img
          className={styles.img}
          src={`${comicsCard.data.results[0].thumbnail.path}.${comicsCard.data.results[0].thumbnail.extension}`}
          alt="comics"
        />
        <div className={styles.info}>
          <h3 className={styles.title}>{comicsCard.data.results[0].title}</h3>
          <p className={styles.text}>{description}</p>
          <p className={styles.pages}>{`${
            comicsCard.data.results[0].pageCount
          } ${"pages"}`}</p>
          <p className={styles.language}>
            {textObjects
              ? `${"Language:"} ${
                  comicsCard.data.results[0].textObjects[0].language
                }`
              : "Language: неизвестен"}
          </p>
          <p className={styles.price}>{`${
            comicsCard.data.results[0].prices[0].price
          } ${"$"}`}</p>
        </div>
        <Link className={styles.back} to="/comicsBlock">
          Back to all
        </Link>
      </div>
    </div>
  );
};

export default ComicsLink;

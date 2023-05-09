import styles from "./comicsCard.module.css";
import { Link } from "react-router-dom";

const ComicsCard = ({ comics }) => {
  let resultComics = comics?.map((elem, comicsCardIndex) => {
    return (
      <div data-elem={elem} className={styles.card} key={comicsCardIndex}>
        <Link to="comicsLink" state={{ comicsCard: elem }}>
          <img
            className={styles.imgCard}
            src={`${elem.data.results[0].thumbnail.path}.${elem.data.results[0].thumbnail.extension}`}
            alt="card fon"
          />
        </Link>
        <h5 className={styles.titleCard}>{elem.data.results[0].title}</h5>
        <p className={styles.priceCard}>
          {elem.data.results[0].prices[0].price + "$"}
        </p>
      </div>
    );
  });
  return <div className={styles.comicsCards}>{resultComics}</div>;
};

export default ComicsCard;

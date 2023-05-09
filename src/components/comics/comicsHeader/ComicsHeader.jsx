import styles from "./comicsHeader.module.css";
import avengers from "../../img/avengers.png";
import logoAvengers from "../../img/avengers_logo.png";
const ComicsHeader = () => {
  return (
    <div className={styles.comicsHeader}>
      <img className={styles.imgAvengers} src={avengers} alt="avengers" />
      <h2 className={styles.title}>New comics every week! Stay tuned!</h2>
      <img src={logoAvengers} alt="logo Avengers" />
    </div>
  );
};

export default ComicsHeader;

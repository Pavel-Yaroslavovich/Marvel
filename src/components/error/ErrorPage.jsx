import { Link } from "react-router-dom";
import styles from "./error.module.css";

const ErrorPage = () => {
  return (
    <>
      <img
        className={styles.fonImg}
        src="https://miro.medium.com/max/3840/1*uRziGU1OJNWawGusbZLxvQ.png"
        alt="error"
      />
      <Link to="charactersBlock">
        <button className={styles.btn}>Back</button>
      </Link>
    </>
  );
};

export default ErrorPage;

import styles from "./header.module.css";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.marvelСolor}>Marvel</span> information portal
      </h1>
      <div>
        <Link className={styles.linkHeader} to="charactersBlock">
          <span
            className={classNames(
              styles.charactersBlock,
              pathname === "/charactersBlock" || pathname === "/"
                ? styles.selectedBlockColor
                : ""
            )}
          >
            Characters
          </span>
        </Link>{" "}
        /{" "}
        <Link className={styles.linkHeader} to="comicsBlock">
          <span
            className={classNames(
              styles.comicsBlock,
              pathname === "/comicsBlock" ||
                pathname === "/comicsBlock/comicsLink"
                ? styles.selectedBlockColor
                : ""
            )}
          >
            Comics
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;

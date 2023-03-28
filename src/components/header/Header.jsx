import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.marvelСolor}>Marvel</span> information portal
      </h1>
      <div>
        <span className={styles.charactersСolor}>Characters</span> /{" "}
        <span className={styles.link}>Comics</span>
      </div>
    </div>
  );
};

export default Header;

import Spinner from "../spinner/Spinner";
import styles from "./charBlock.module.css";
import { nanoid } from "nanoid";
import React from "react";

const randomId = () => {
  return nanoid();
};

const CharList = ({ isLoading, arrNineChars, clickChoiceChar }) => {
  const resNineChars = arrNineChars?.map((elem) => {
    return (
      <div
        className={styles.card}
        key={randomId()}
        onClick={() => clickChoiceChar()}
      >
        <img
          src={`${elem?.thumbnail.path}.${elem?.thumbnail.extension}`}
          alt="foto"
          className={styles.cardImg}
        />
        <div className={styles.cardTitle}>{elem?.name}</div>
      </div>
    );
  });
  console.log(arrNineChars);
  console.log(resNineChars);

  return (
    <div className={styles.charList}>
      {isLoading ? <Spinner /> : <>{resNineChars}</>}
    </div>
  );
};

export default CharList;

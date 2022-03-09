import { Component } from "react";
import styles from "./MyCard.module.css";
import TextBlock from "./TextBlock.js";

export default function MyCard(props) {
    //Props:
    //  src
    //  description
    //  title

  return (
    <div className={styles.mccontainer}>
      <div className={styles.img}><img src={props.src}/></div>
      <div className={styles.information}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.description}>{props.description}</div>
          </div>
    </div>
  );
}



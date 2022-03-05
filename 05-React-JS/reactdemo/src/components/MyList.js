import { Component } from "react";
import styles from "./MyList.module.css";
import TextBlock from "./TextBlock.js";

export default function MyList(props) {
  const elements = props.children;

  return (
    <div className={styles.mlcontainer}>
      <div className={styles.title}>{props.title}</div>
      <ul className={styles.elements}>{elements.map(addKeys)}</ul>
    </div>
  );
}

function addKeys(item, index, arr) {
  if (index % 2 == 0) {
    return <div key={index} className={styles.elementr}>
    <TextBlock text={item} direction="right" /></div> ;
  }
  return <div key={index} className={styles.elementl}>
  <TextBlock text={item} direction="left" /></div>;
}

import { Component } from "react";
import styles from "./TLlist.module.css";

export default function TLlist(props) {
  return <ul className={styles.elements}>{props.elements.map(addTask)}</ul>;
}

function addTask(item, index, arr) {
  console.log("Test: " + item);
  return (
    <div key={index} className={styles.eContainer}>
      <div className={styles.eTitle}>
        {item.title}
        <div className={styles.eContent}>{item.content}</div>
      </div>
    </div>
  );
}

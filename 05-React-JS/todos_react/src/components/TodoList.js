import { Component } from "react";
import styles from "./TodoList.module.css";

export default function TodoList(props) {
  if (props.children == undefined) {
    var elements = {tasks:[]};
  } else {
    var elements = props.children;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.taskAdder}>
        <div className={styles.addContent}>
          <input />
          <textarea id=""></textarea>
        </div>
      </div>
      <ul className={styles.elements}>{elements.map(addTask)}</ul>
    </div>
  );
}

function addTask(item, index, arr) {
  return (
    <div key={index} className={styles.eContainer}>
      <div className={styles.eTitle}>{item[0]}</div>
      <div className={styles.eContent}>{item[1]}</div>
    </div>
  );
}

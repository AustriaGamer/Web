import { Component } from "react";
import parse, { attributesToProps } from "html-react-parser";
import styles from "./MyList.module.css";
import TextBlock from "./TextBlock.js";

export default function MyList(props) {
  const elements = props.children;
  
  return (
    <div className={styles.container}>
        <div className={styles.title}>
          {props.title}
        </div>
        <ul>
        {elements.map(addKeys)}
      </ul>
    </div>
  );
}

function addKeys(item, index,arr){
  return <TextBlock key={index} text={item} />
}
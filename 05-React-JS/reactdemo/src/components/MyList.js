import { Component } from "react";
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
  if(index%2==0){
    return <TextBlock key={index} text={item} direction="right"/>
  }
  return <TextBlock key={index} text={item} direction="left"/>
}
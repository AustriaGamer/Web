import { Component } from "react";
import styles from "./TodoList.module.css";
import TLlist from "./TLlist";

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state ={tasks:[{title:"test-title", content:"test-text"},{title:"test-title2", content:"test-text2"}]}
  }
  
  
  render(){
  return (
    <div className={styles.container}>
      <div className={styles.title}>{this.props.title}</div>
      <div className={styles.taskAdder}>
        <div className={styles.addContent}>
          <input />
          <textarea id=""></textarea>
        </div>
      </div>
      <TLlist elements={this.state.tasks}/>
    </div>
  );
  }
}

function addTask(item, index, arr) {
  return (
    <div key={index} className={styles.eContainer}>
      <div className={styles.eTitle}>{item[0]}</div>
      <div className={styles.eContent}>{item[1]}</div>
    </div>
  );
}

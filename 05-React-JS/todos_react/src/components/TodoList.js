import { Component } from "react";
import styles from "./TodoList.module.css";
import TLlist from "./TLlist";
import TLtaskAdder from "./TLtaskAdder";

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state ={tasks:[{title:"test-title", content:"test-text"},{title:"test-title2", content:"test-text2"}],
    selected:null
  }
  }
  shwoMore = (row) =>{
    row.style.display = "visible";
  }
  
  render(){
  return (
    <div className={styles.container}>
      <div className={styles.title}>{this.props.title}</div>
      <TLtaskAdder/>
      <TLlist elements={this.state.tasks}/>
    </div>
  );
  }
}


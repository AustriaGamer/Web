import { Component } from "react";
import styles from "./TLlist.module.css";

export default class TLlist extends Component {
  constructor(props) {
    super(props);
    //this.deleteTask = this.deleteTask.bind(this);
  }

  render() {
    return (
      <ul className={styles.elements}>
        {this.props.parent.state.tasks.map(this.addTask)}
      </ul>
    );
  }
  delteTask = () =>{
    alert(this.props.parent.state.tasks)
  }
  

  addTask(item, index, arr,parent) {
    console.log(parent)
    return (
      <li key={index} className={styles.eContainer}>
        <div className={styles.eTitle}>
          <details className={styles.details}>
            <summary>
              {item.title}
              <button onClick={() => {item.delete(item.id)}}/>
            </summary>
            <div className={styles.eContent}>{item.content}</div>
          </details>
        </div>
      </li>
    );
  }
}

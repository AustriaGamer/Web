import styles from "./TLtaskAdder.module.css";

export default function TLtaskAdder(props) {
  return (
    <div className={styles.taskAdder}>
        <div className={styles.addContent}>
          <input className={styles.texti}/>
          <textarea id="" className={styles.texta}/>
        </div>
        <button className={styles.addTask}>Add Task</button>
      </div>
  );
}


 


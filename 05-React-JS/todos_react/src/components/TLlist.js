import styles from "./TLlist.module.css";

export default function TLlist(props) {
  return <ul className={styles.elements}>{props.elements.map(addTask)}</ul>;
}

function addTask(item, index, arr) {
  console.log("Test: " + item);
  return (
    <li key={index} className={styles.eContainer}>
      <div className={styles.eTitle}>
        <a>
        {item.title}
        </a>
        <div className={styles.eContent}>{item.content}</div>
      </div>
    </li>
  );
}

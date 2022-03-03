import { Component } from "react";
import styles from "./SuperButton.module.css"

export default class SuperButton extends Component {
  render() {
    return (
      <div className={styles.container}>
        <a  href="https://codepen.io/avstorm/pen/MBmvJQ" target="_blank">
          <div className={styles.btnepic}>
          <div>
            <span>By Andreas Storm</span>
            <span>Epic Button</span>
          </div>
          </div>
        </a>
      </div>
    );
  }
}

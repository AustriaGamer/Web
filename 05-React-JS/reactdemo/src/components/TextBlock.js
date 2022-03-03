import { Component } from "react";
import styles from "./TextBlock.module.css";

export default class SuperButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.container}>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

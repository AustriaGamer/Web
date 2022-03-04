import { Component } from "react";
import styles from "./TextBlock.module.css";

export default class TextBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if(this.props.direction == "right"){console.log("right")
      return (
        <div className={styles.container}>
          <div className={styles.blockRight+" "+ styles.block}>
            <div>
            <span>{this.props.text}</span>
            <span>{this.props.text}</span>
            </div>
          </div>
        </div>
      );
    }
    console.log("left")
    return (
      <div className={styles.container}>
        <div className={styles.blockLeft +" "+ styles.block}>
          <div>
          <span>{this.props.text}</span>
          <span>{this.props.text}</span>
          </div>
        </div>
      </div>
    );
  }
}

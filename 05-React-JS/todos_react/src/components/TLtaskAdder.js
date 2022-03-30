import { Component } from "react";
import styles from "./TLtaskAdder.module.css";

export default class TLtaskAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: "",
      inputText: "",
    };
  }

  addTask = () => {
    this.props.statehandler({ title: "test-title", content: "test-text" })
  };
  updateAreaValue = (evt) => {
    this.setState({
      inputText: evt.target.value,
    });
  };
  updateInputValue = (evt) => {
    this.setState({
      inputTitle: evt.target.value,
    });
  };

  render() {
    return (
      <div className={styles.taskAdder}>
        <div className={styles.addContent}>
          <input
            value={this.state.inputTitle}
            onChange={(evt) => this.updateInputValue(evt)}
            className={styles.texti}
          />
          <textarea
            value={this.state.inputText}
            onChange={(evt) => this.updateAreaValue(evt)}
            className={styles.texta}
          />
        </div>
        <div className={styles.button}>
          <button className={styles.addTask} onClick={this.addTask}>
            Add Task
          </button>
        </div>
      </div>
    );
  }
}

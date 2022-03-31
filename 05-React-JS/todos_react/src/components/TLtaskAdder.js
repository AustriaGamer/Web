import { Component } from "react";
import styles from "./TLtaskAdder.module.css";

export default class TLtaskAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: "",
      inputText: "",
      addedIDS: 0,
    };
  }

  addTask = () => {
    if (this.state.inputTitle !== "") {
      this.props.statehandler({
        title: this.state.inputTitle,
        content: this.state.inputText,
        id: this.state.addedIDS,
      });
      this.setState({
        addedIDS: this.state.addedIDS + 1,
      });
    }
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

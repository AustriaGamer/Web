import { Component } from "react";
import styles from "./TodoList.module.css";
import TLlist from "./TLlist";
import TLtaskAdder from "./TLtaskAdder";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: "test-title", content: "test-text" },
        { title: "test-title2", content: "test-text2" },
      ],
    };
    this.stateHandler = this.stateHandler.bind(this);
  }
  stateHandler(task){
    this.setState({tasks:[task]})
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>{this.props.title}</div>
        <TLtaskAdder statehandler={this.stateHandler} />
        <TLlist elements={this.state.tasks} />
      </div>
    );
  }
}
// https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-react-js
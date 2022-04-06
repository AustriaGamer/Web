import { Component } from "react";
import styles from "./TodoList.module.css";
import TLlist from "./TLlist";
import TLtaskAdder from "./TLtaskAdder";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    
    this.stateHandler = this.stateHandler.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.filterTask = this.filterTask.bind(this);
    this.state = {
      tasks: [],
      reqID: 0, 
    };
  }
  stateHandler(task) {
    this.setState({ tasks: this.state.tasks.concat([task]) });
  }
  deleteTask(id) {
    this.setState({ reqID: id });
    this.setState({ tasks: this.state.tasks.filter(this.filterTask) });
  }
  filterTask(obj) {
    return obj.id !== this.state.reqID;
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>{this.props.title}</div>
        <TLtaskAdder statehandler={this.stateHandler} />
        <TLlist parent={this} />
        <button onClick={this.deleteTask} />
      </div>
    );
  }
}
//

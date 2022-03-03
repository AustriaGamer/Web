import { Component } from "react";
import parse from 'html-react-parser'
import styles from "./MyList.module.css";
import TextBlock from "./TextBlock.js";

export default class SuperButton extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    const html = createList(this.props.children, this.props.title)
    console.log(html + this.props.children[0])
    return <div>{parse(html)}</div>
  }
  
}
function createList(arr, title) {
      let html="<div className="+title+">"
      for (let i = 0; i < arr.length; i++) {
        html= html + "<TextBlock text='"+arr[i]+"'></TextBlock>"
      }
      html = html + "</div>";
      return html;
}
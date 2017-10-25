import React, { Component } from "react";
import { Button } from "antd";
import styles from "./Sort.css";

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortToggle: true,
    };
  }

  sortSwitch = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      sortToggle: !this.state.sortToggle,
    });
  };

  render() {
    return (
      <Button onClick={this.sortSwitch} className={`${styles.extra} ${styles.btn_link}`}>{this.state.sortToggle ? "切换为时间排序" : "切换为默认排序"}</Button>
    );
  }
}
import React, { Component } from "react";
import axios from "axios";

class ApiCall extends Component {
  state = {
    todo: null,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        this.setState({
          todo: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Http requests in react</h1>
        {this.state.todo ? <p>{this.state.todo.title}</p> : <p>Loading...</p>}
      </div>
    );
  }
}
export default ApiCall;

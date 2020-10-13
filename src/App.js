import React, { Component } from 'react';
import Sample from "./components/Sample";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {


    const data = [
      {
        key: 1,
        value: "sample 1"
      },
      {
        key: 2,
        value: "sample 2"
      },
      {
        key: 3,
        value: "sample 3"
      }
    ];


    return (
      <>
        <Sample data={data} />
      </>
    )
  }
}


export default App;

import React from "react";

//ES6 

const Sample = ({ data }) => {

  return <ul>
    {data.map(item => <li key={item.key}>{item.value}</li>)}
  </ul>

}

Sample.defaultProps = {
  data: []
}

export default Sample;
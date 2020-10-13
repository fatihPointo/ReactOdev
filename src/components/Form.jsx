import React, { useState } from "react";

//ES6 

const Form = () => {

  const [value, setValue] = useState()

  const handleSubmit = (e) => {
    alert(value)

    e.preventDefault()
  }

  return <>
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setValue(e.target.value)} />
      <button type="submit">kaydet</button>
    </form>
  </>

}


export default Form;
import React, { useEffect, useState } from 'react'

function index() {

  const[text, setText]=useState(null)
  useEffect(()=>{
  fetch("http://localhost:8080/api/home")
  .then((response) => response.json())
  .then((data) => {
    setText(data.message)
    console.log(data);
  });
  },[])


  return (
    <div>{text}</div>
    // <div>
    //   <p>Hello</p>
    // </div>
  )
}

export default index
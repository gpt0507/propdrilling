import React from 'react'

function ChildC({name,address}) {
  console.log("name is at childC", name)
  console.log("address is at childC", address)

  return (
    <>
      ChildC
      <h1>Name is {name}</h1>
      <h1>Address is {address}</h1>
    </>
  )
}

export default ChildC
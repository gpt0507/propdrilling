import React from 'react'
import ChildC from './ChildC'

function ChildB({name,address}) {
  console.log("name is at childB", name)
  console.log("address is at childB", address)

  return (
    <>
      <ChildC name={name} address={address}/>
    </>
  )
}

export default ChildB
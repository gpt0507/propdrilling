import React from 'react'
import ChildB from './ChildB'

function ChildA({ name, address }) {
  console.log("name is at childA", name)
  console.log("address is at childA", address)

  return (
    <>
      <ChildB name={name} address={address} />
    </>
  )
}

export default ChildA
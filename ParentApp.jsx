import React from 'react'
import ChildA from './ChildA'

function ParentApp() {

  let name = "abhishek"
  let address = "alwar"

  return (
    <>
      <ChildA name={name} address={address} />
    </>
  )
}

export default ParentApp
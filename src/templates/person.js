import React from "react"

const Person = ({ pageContext }) => {
  const { name, age } = pageContext
  return (
    <div>
      <span>{name}</span>
      <span>{age}</span>
    </div>
  )
}

export default Person

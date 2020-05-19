import React, { useState } from 'react'

function App() {
  //console.log(useState(0))
  const [total, setTotal] = useState(0)
  //const [name,setName] = useState('')
  //const [email,setEmail] = useState('')

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
          //this.setState({ total: this.state.total + 1 })
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
          //this.setState({ total: this.state.total - 1 })
        }}
      >
        -1
      </button>
    </>
  )
}

export default App

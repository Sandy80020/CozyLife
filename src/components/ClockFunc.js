import React, { useState, useEffect } from 'react'

function ClockFunc(props) {
  const [date, setDate] = useState(new Date())

  //取代 componentDidMount 與 componentWillUnmount
  useEffect(() => {
    //componentDidMount要執行的部分
    var timerID = setInterval(() => tick(), 1000)
    //回傳的函式裡是componentWillUnmount
    return function cleanup() {
      clearInterval(timerID)
    }
  })

  function tick() {
    setDate(new Date())
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  )
}
export default ClockFunc

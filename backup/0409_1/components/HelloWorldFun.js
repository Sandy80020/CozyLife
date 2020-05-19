import React, { useState } from 'react'
//import PropTypes from 'prop-types'

function HelloWorldFunc(props) {
  const [inputText, setInputText] = useState('')
  return (
    <>
      <h1>函式型元件</h1>
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button
        onClick={() => {
          props.sendMe(inputText)
        }}
      >
        送資料到App(父母元件)
      </button>
    </>
  )
}
// HelloWorldFunc.propTypes = {
//   text: PropTypes.string.isRequired,
//   total: PropTypes.number.isRequired,
// }
// //設定預設的props值
// HelloWorldFunc.defaultProps = {
//   text: '很不好',
//   total: 0,
// }

export default HelloWorldFunc

import React from 'react'
import LifeCycle from '../../src/components/LifeCycle'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      isShow: true,
    }
  }
  render() {
    let display = <LifeCycle />
    //if (this.state.isShow === false) display = <h1>沒人在</h1>
    return (
      <>
        {this.state.isShow ? display : <h2>沒人在</h2>}
        <button
          onClick={() => {
            this.setState({ isShow: false })
          }}
        >
          再見
        </button>
        <button
          onClick={() => {
            this.setState({ isShow: true })
          }}
        >
          復活
        </button>
      </>
    )
  }
}

export default App

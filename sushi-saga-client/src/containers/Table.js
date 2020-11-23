import React, { Component, Fragment } from 'react'
import SushiWallet from '../components/SushiWallet'

const renderPlates = (array) => {
  return array.map((x, index) => {
    return <div className="empty-plate" style={{ top: -7 * index }}/>
  })
}


class Table extends Component {
  constructor(props){
    super(props)
    
  }

  
  

  render() {
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${ this.props.money } remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {
              /* 
                renderPlates takes an array 
                and renders an empty plate
                for every element in the array
              */
              renderPlates([])
            }
          </div>
          <SushiWallet updateMoney={this.props.updateMoney}/>
        </div>
        <div>
          
        </div>
      </Fragment>
    )
  }
}

export default Table